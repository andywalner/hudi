/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.spark.sql.adapter

import org.apache.avro.Schema
import org.apache.hadoop.fs.Path
import org.apache.hudi.client.utils.SparkRowSerDe
import org.apache.hudi.common.table.HoodieTableMetaClient
import org.apache.hudi.spark3.internal.ReflectUtil
import org.apache.hudi.{AvroConversionUtils, DefaultSource, Spark3RowSerDe}
import org.apache.hudi.{AvroConversionUtils, DefaultSource, HoodieBaseRelation, Spark3RowSerDe}
import org.apache.spark.internal.Logging
import org.apache.spark.sql.{HoodieSpark3CatalogUtils, SQLContext, SparkSession}
import org.apache.spark.sql.avro.{HoodieAvroSchemaConverters, HoodieSparkAvroSchemaConverters}
import org.apache.spark.sql.catalyst.analysis.EliminateSubqueryAliases
import org.apache.spark.sql.catalyst.catalog.CatalogTable
import org.apache.spark.sql.catalyst.encoders.RowEncoder
import org.apache.spark.sql.catalyst.expressions.{Expression, InterpretedPredicate, Predicate}
import org.apache.spark.sql.catalyst.planning.PhysicalOperation
import org.apache.spark.sql.catalyst.plans.logical.LogicalPlan
import org.apache.spark.sql.catalyst.util.DateFormatter
import org.apache.spark.sql.connector.catalog.V2TableWithV1Fallback
import org.apache.spark.sql.execution.datasources._
import org.apache.spark.sql.execution.datasources.v2.DataSourceV2Relation
import org.apache.spark.sql.hudi.SparkAdapter
import org.apache.spark.sql.sources.BaseRelation
import org.apache.spark.sql.types.StructType
import org.apache.spark.sql.{HoodieSpark3CatalogUtils, SQLContext, SparkSession}
import org.apache.spark.storage.StorageLevel
import org.apache.spark.storage.StorageLevel._

import java.time.ZoneId
import java.util.TimeZone
import java.util.concurrent.ConcurrentHashMap
import scala.collection.JavaConverters.mapAsScalaMapConverter
import scala.collection.convert.Wrappers.JConcurrentMapWrapper

/**
 * Base implementation of [[SparkAdapter]] for Spark 3.x branch
 */
abstract class BaseSpark3Adapter extends SparkAdapter with Logging {

  private val cache = JConcurrentMapWrapper(
    new ConcurrentHashMap[ZoneId, DateFormatter](1))

  def getCatalogUtils: HoodieSpark3CatalogUtils

  override def createSparkRowSerDe(schema: StructType): SparkRowSerDe = {
    val encoder = RowEncoder(schema).resolveAndBind()
    new Spark3RowSerDe(encoder)
  }

  override def resolveHoodieTable(plan: LogicalPlan): Option[CatalogTable] = {
    super.resolveHoodieTable(plan).orElse {
      EliminateSubqueryAliases(plan) match {
        // First, we need to weed out unresolved plans
        case plan if !plan.resolved => None
        // NOTE: When resolving Hudi table we allow [[Filter]]s and [[Project]]s be applied
        //       on top of it
        case PhysicalOperation(_, _, DataSourceV2Relation(v2: V2TableWithV1Fallback, _, _, _, _)) if isHoodieTable(v2.v1Table) =>
          Some(v2.v1Table)
        case _ => None
      }
    }
  }

  override def getAvroSchemaConverters: HoodieAvroSchemaConverters = HoodieSparkAvroSchemaConverters

  override def getSparkParsePartitionUtil: SparkParsePartitionUtil = Spark3ParsePartitionUtil

  override def getDateFormatter(tz: TimeZone): DateFormatter = {
    cache.getOrElseUpdate(tz.toZoneId, ReflectUtil.getDateFormatter(tz.toZoneId))
  }

  /**
   * Combine [[PartitionedFile]] to [[FilePartition]] according to `maxSplitBytes`.
   */
  override def getFilePartitions(
      sparkSession: SparkSession,
      partitionedFiles: Seq[PartitionedFile],
      maxSplitBytes: Long): Seq[FilePartition] = {
    FilePartition.getFilePartitions(sparkSession, partitionedFiles, maxSplitBytes)
  }

  override def createInterpretedPredicate(e: Expression): InterpretedPredicate = {
    Predicate.createInterpreted(e)
  }

  override def createRelation(sqlContext: SQLContext,
                              metaClient: HoodieTableMetaClient,
                              schema: Schema,
                              globPaths: Array[Path],
                              parameters: java.util.Map[String, String]): BaseRelation = {
    val dataSchema = Option(schema).map(AvroConversionUtils.convertAvroSchemaToStructType).orNull
    DefaultSource.createRelation(sqlContext, metaClient, dataSchema, globPaths, parameters.asScala.toMap)
  }

  /**
   * Converts instance of [[StorageLevel]] to a corresponding string
   */
  override def convertStorageLevelToString(level: StorageLevel): String = level match {
    case NONE => "NONE"
    case DISK_ONLY => "DISK_ONLY"
    case DISK_ONLY_2 => "DISK_ONLY_2"
    case DISK_ONLY_3 => "DISK_ONLY_3"
    case MEMORY_ONLY => "MEMORY_ONLY"
    case MEMORY_ONLY_2 => "MEMORY_ONLY_2"
    case MEMORY_ONLY_SER => "MEMORY_ONLY_SER"
    case MEMORY_ONLY_SER_2 => "MEMORY_ONLY_SER_2"
    case MEMORY_AND_DISK => "MEMORY_AND_DISK"
    case MEMORY_AND_DISK_2 => "MEMORY_AND_DISK_2"
    case MEMORY_AND_DISK_SER => "MEMORY_AND_DISK_SER"
    case MEMORY_AND_DISK_SER_2 => "MEMORY_AND_DISK_SER_2"
    case OFF_HEAP => "OFF_HEAP"
    case _ => throw new IllegalArgumentException(s"Invalid StorageLevel: $level")
  }
}
