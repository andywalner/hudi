"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[70715],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},27745:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={title:"Incremental Processing on the Data Lake",excerpt:"How Apache Hudi provides ability for incremental data processing.",author:"vinoyang",category:"blog"},l=void 0,c={permalink:"/cn/blog/2020/08/18/hudi-incremental-processing-on-data-lakes",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-08-18-hudi-incremental-processing-on-data-lakes.md",source:"@site/blog/2020-08-18-hudi-incremental-processing-on-data-lakes.md",title:"Incremental Processing on the Data Lake",description:"NOTE: This article is a translation of the infoq.cn article, found here, with minor edits",date:"2020-08-18T00:00:00.000Z",formattedDate:"August 18, 2020",tags:[],readingTime:17.005,truncated:!0,authors:[{name:"vinoyang"}],prevItem:{title:"Efficient Migration of Large Parquet Tables to Apache Hudi",permalink:"/cn/blog/2020/08/20/efficient-migration-of-large-parquet-tables"},nextItem:{title:"PrestoDB and Apache Hudi",permalink:"/cn/blog/2020/08/04/PrestoDB-and-Apache-Hudi"}},d={authorsImageUrls:[void 0]},p=[{value:"NOTE: This article is a translation of the infoq.cn article, found here, with minor edits",id:"note-this-article-is-a-translation-of-the-infoqcn-article-found-here-with-minor-edits",children:[],level:3},{value:"Traditional data lakes lack the primitives for incremental processing",id:"traditional-data-lakes-lack-the-primitives-for-incremental-processing",children:[],level:2},{value:"The significance of incremental processing for the data lake",id:"the-significance-of-incremental-processing-for-the-data-lake",children:[{value:"Streaming Semantics",id:"streaming-semantics",children:[],level:3},{value:"Warehousing needs Incremental Processing",id:"warehousing-needs-incremental-processing",children:[],level:3},{value:"Quasi-real-time scenarios, resource/efficiency trade-offs",id:"quasi-real-time-scenarios-resourceefficiency-trade-offs",children:[],level:3},{value:"Incremental processing facilitates unified data lake architecture",id:"incremental-processing-facilitates-unified-data-lake-architecture",children:[],level:3}],level:2},{value:"Hudi&#39;s support for incremental processing",id:"hudis-support-for-incremental-processing",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],h={toc:p};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"note-this-article-is-a-translation-of-the-infoqcn-article-found-here-with-minor-edits"},"NOTE: This article is a translation of the infoq.cn article, found ",(0,r.kt)("a",{parentName:"h3",href:"https://www.infoq.cn/article/CAgIDpfJBVcJHKJLSbhe"},"here"),", with minor edits"),(0,r.kt)("p",null,'Apache Hudi is a data lake framework which provides the ability to ingest, manage and query large analytical data sets on a distributed file system/cloud stores.\nHudi joined the Apache incubator for incubation in January 2019, and was promoted to the top Apache project in May 2020. This article mainly discusses the importance\nof Hudi to the data lake from the perspective of "incremental processing". More information about Apache Hudi\'s framework functions, features, usage scenarios, and\nlatest developments can be found at ',(0,r.kt)("a",{parentName:"p",href:"https://qconplus.infoq.cn/2020/shanghai/presentation/2646"},"QCon Global Software Development Conference (Shanghai Station) 2020"),"."),(0,r.kt)("p",null,"Throughout the development of big data technology, Hadoop has steadily seized the opportunities of this era and has become the de-facto standard for enterprises to build big data infrastructure.\nAmong them, the distributed file system HDFS that supports the Hadoop ecosystem almost naturally has become the standard interface for big data storage systems. In recent years, with the rise of\ncloud-native architectures, we have seen a wave of newer models embracing low-cost cloud storage emerging, a number of data lake frameworks compatible with HDFS interfaces\nembracing cloud vendor storage have emerged in the industry as well. "),(0,r.kt)("p",null,'However, we are still processing data pretty much in the same way we did 10 years ago. This article will try to talk about its importance to the data lake from the perspective of "incremental processing".'),(0,r.kt)("h2",{id:"traditional-data-lakes-lack-the-primitives-for-incremental-processing"},"Traditional data lakes lack the primitives for incremental processing"),(0,r.kt)("p",null,"In the era of mobile Internet and Internet of Things, delayed arrival of data is very common.\nHere we are involved in the definition of two time semantics: ",(0,r.kt)("a",{parentName:"p",href:"https://www.oreilly.com/radar/the-world-beyond-batch-streaming-101/"},"event time and processing time"),". "),(0,r.kt)("p",null,"As the name suggests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Event time:")," the time when the event actually occurred;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Processing time:")," the time when an event is observed (processed) in the system;")),(0,r.kt)("p",null,'Ideally, the event time and the processing time are the same, but in reality, they may have more or less deviation, which we often call "Time Skew".\nWhether for low-latency stream computing or common batch processing, the processing of event time and processing time and late data is a common and difficult problem.\nIn general, in order to ensure correctness, when we strictly follow the "event time" semantics, late data will trigger the\n',(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.10/dev/stream/operators/windows#late-elements-considerations"},"recalculation of the time window"),'\n(usually Hive partitions for batch processing), although the results of these "windows" may have been calculated or even interacted with the end user.\nFor recalculation, the extensible key-value storage structure is usually used in streaming processing, which is processed incrementally at the record/event level and optimized\nbased on point queries and updates. However, in data lakes, recalculating usually means rewriting the entire (immutable) Hive partition (or simply a folder in DFS), and\nre-triggering the recalculation of cascading tasks that have consumed that Hive partition.'),(0,r.kt)("p",null,"With data lakes supporting massive amounts of data, many long-tail businesses still have a strong demand for updating cold data. However, for a long time,\nthe data in a single partition in the data lake was designed to be non-updatable. If it needs to be updated, the entire partition needs to be rewritten.\nThis will seriously damage the efficiency of the entire ecosystem. From the perspective of latency and resource utilization, these operations on Hadoop will incur expensive overhead.\nBesides, this overhead is usually also cascaded to the entire Hadoop data processing pipeline, which ultimately leads to an increase in latency by several hours."),(0,r.kt)("p",null,"In response to the two problems mentioned above, if the data lake supports fine-grained incremental processing, we can incorporate changes into existing Hive partitions\nmore effectively, and provide a way for downstream table consumers to obtain only the changed data. For effectively supporting incremental processing, we can decompose it into the\nfollowing two primitive operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Update insert (upsert):")," Conceptually, rewriting the entire partition can be regarded as a very inefficient upsert operation, which will eventually write much more data than the\noriginal data itself. Therefore, support for (bulk) upsert is considered a very important feature. ",(0,r.kt)("a",{parentName:"p",href:"https://research.google/pubs/pub42851/"},"Google's Mesa")," (Google's data warehouse system) also\ntalks about several techniques that can be applied to rapid data ingestion scenarios.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Incremental consumption:")," Although upsert can solve the problem of quickly releasing new data to a partition, downstream data consumers do not know\nwhich data has been changed from which time in the past. Usually, consumers can only know the changed data by scanning the entire partition/data table and\nrecalculating all the data, which requires considerable time and resources. Therefore, we also need a mechanism to more efficiently obtain data records that\nhave changed since the last time the partition was consumed."))),(0,r.kt)("p",null,"With the above two primitive operations, you can upsert a data set, and then incrementally consume from it, and create another (also incremental) data set to solve the two problems\nwe mentioned above and support many common cases, so as to support end-to-end incremental processing and reduce end-to-end latency. These two primitives combine with each other,\nunlocking the ability of stream/incremental processing based on DFS abstraction."),(0,r.kt)("p",null,"The storage scale of the data lake far exceeds that of the data warehouse. Although the two have different focuses on the definition of functions,\nthere is still a considerable intersection (of course, there are still disputes and deviations from definition and implementation.\nThis is not the topic this article tries to discuss). In any case, the data lake will support larger analytical data sets with cheaper storage,\nso incremental processing is also very important for it. Next let's discuss the significance of incremental processing for the data lake."),(0,r.kt)("h2",{id:"the-significance-of-incremental-processing-for-the-data-lake"},"The significance of incremental processing for the data lake"),(0,r.kt)("h3",{id:"streaming-semantics"},"Streaming Semantics"),(0,r.kt)("p",null,'It has long been stated that there is a "',(0,r.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying"},"dualism"),'"\nbetween the change log (that is, the "flow" in the conventional sense we understand) and the table.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dualism",src:a(44244).Z})),(0,r.kt)("p",null,'The core of this discussion is: if there is a change log, you can use these changes to generate a data table and get the current status. If you update a table,\nyou can record these changes and publish all "change logs" to the table\'s status information. This interchangeable nature is called "stream table duality" for short.'),(0,r.kt)("p",null,'A more general understanding of "stream table duality": when the business system is modifying the data in the MySQL table, MySQL will reflect these changes as Binlog,\nif we publish these continuous Binlog (stream) to Kafka, and then let the downstream processing system subscribe to the Kafka, and use the state store to gradually\naccumulate the intermediate results. Then the current state of this intermediate result can reflects the current snapshot of the table.'),(0,r.kt)("p",null,'If the two primitives mentioned above that support incremental processing can be introduced to the data lake, the above pipeline, which can reflect the\n"stream table duality", is also applicable on the data lake. Based on the first primitive, the data lake can also ingest the Binlog log streams in Kafka,\nand then store these Binlog log streams into "tables" on the data lake. Based on the second primitive, these tables recognize the changed records as "Binlog"\nstreams to support the incremental consumption of subsequent cascading tasks.'),(0,r.kt)("p",null,"Of course, as the data in the data lake needs to be landed on the final file/object storage, considering the trade-off between throughput and write performance,\nBinlog on the data lake reacts to a small batch of change logs over a period of time on the stream. For example, the Apache Hudi community is further trying to\nprovide an incremental view similar to Binlog for different Commits (a Commit refers to a batch of data write commit),\nas shown in the following figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"idu",src:a(48881).Z})),(0,r.kt)("p",null,'Remarks in the "Flag" column:'),(0,r.kt)("p",null,"I: Insert;\nD: Delete;\nU: After image of Update;\nX: Before image of Update;"),(0,r.kt)("p",null,"Based on the above discussion, we can think that incremental processing and stream are naturally compatible, and we can naturally connect them on the data lake."),(0,r.kt)("h3",{id:"warehousing-needs-incremental-processing"},"Warehousing needs Incremental Processing"),(0,r.kt)("p",null,"In the data warehouse, whether it is dimensional modeling or relational modeling theory, it is usually constructed based on the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_warehouse#Design_methods"},"layered design ideas"),".\nIn terms of technical implementation, multiple stages (steps) of a long pipeline are formed by connecting multiple levels of ETL tasks through a workflow scheduling engine,\nas shown in the following figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image2",src:a(8511).Z})),(0,r.kt)("p",null,"As the main application of the data warehouse, in the OLAP field, for the conventional business scenarios(for no or few changes), there are already some frameworks in the industry\nthat focus on the scenarios where they are good at providing efficient analysis capabilities. However, in the Hadoop data warehouse/data lake ecosystem,\nthere is still no good solution for the analysis scenario of frequent changes of business data."),(0,r.kt)("p",null,"For example, let\u2019s consider the scenario of updating the order status of a travel business. This scenario has a typical long-tail effect:\nyou cannot know whether an order will be billed tomorrow, one month later, or one year later. In this scenario, the order table is the main data table,\nbut usually we will derive other derived tables based on this table to support the modeling of various business scenarios.\nThe initial update takes place in the order table at the ODS level, but the derived tables need to be updated in cascade."),(0,r.kt)("p",null,"For this scenario, in the past, once there is a change, people usually need to find the partition where the data to be updated is located in the Hive order\ntable of the ODS layer, and update the entire partition, besides, the partition of the relevant data of the derived table needs to be updated in cascade."),(0,r.kt)("p",null,"Yes, someone will definitely think of that Kudu's support for Upsert can solve the problem of the old version of Hive missing the first incremental primitive.\nBut the Kudu storage engine has its own limitations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Performance: additional requirements for the hardware itself;"),(0,r.kt)("li",{parentName:"ol"},"Ecologically: In terms of adapting to mainstream big data computing frameworks and machine learning frameworks, it is far less advantageous than Hive;"),(0,r.kt)("li",{parentName:"ol"},"Cost: requires special maintenance costs and expenses;"),(0,r.kt)("li",{parentName:"ol"},"Did not solve the second primitive of incremental processing mentioned above: the problem of incremental consumption.")),(0,r.kt)("p",null,"In summary, incremental processing has the following advantages on the data lake:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Performance improvement:")," Ingesting data usually needs to handle updates, deletes, and enforce unique key constraints. Since incremental primitives support record-level updates,\nit can bring orders of magnitude performance improvements to these operations. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Faster ETL/derived Pipelines:")," An ubiquitous next step, once the data has been ingested from external sources is to build derived data pipelines using\nApache Spark/Apache Hive or any other data processing framework to ETL the ingested data for a variety of use-cases like data warehouse,\nmachine learning, or even just analytics. Typically, such processes again rely on batch processing jobs expressed in code or SQL. Such data pipelines can be speed up dramatically,\nby querying one or more input tables using an incremental query instead of a regular snapshot query, resulting in only processing the incremental changes from upstream tables and\nthen upsert or delete the target derived table.Similar to raw data ingestion, in order to reduce the data delay of the modelled table, the ETL job only needs to gradually extract the\nchanged data from the original table and update the previously derived output table instead of rebuilding the entire output table every few hours ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unified storage:")," Based on the above two advantages, faster and lighter processing on the existing data lake means that only for the purpose of accessing near real-time data,\nno special storage or data mart is needed."),(0,r.kt)("p",null,"Next, we use two simple examples to illustrate how ",(0,r.kt)("a",{parentName:"p",href:"https://www.oreilly.com/content/ubers-case-for-incremental-processing-on-hadoop/"},"incremental processing")," can speed up the processing\nof pipelines in analytical scenarios. First of all, data projection is the most common and easy to understand case:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image7",src:a(40470).Z})),(0,r.kt)("p",null,"This simple example shows that: by upserting new changes into table_1 and establishing a simple projected table (projected_table) through incremental consumption, we can\noperate simpler with lower latency more efficiently projection."),(0,r.kt)("p",null,"Next, for a more complex scenario, we can use incremental processing to support the stream and batch connections supported by the stream computing framework,\nand stream-stream connections (just need to add some additional logic to align window) :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image6",src:a(20803).Z})),(0,r.kt)("p",null,"The example in the figure above connects a fact table to multiple dimension tables to create a connected table. This case is one of the rare scenarios where we can save hardware\ncosts while significantly reducing latency."),(0,r.kt)("h3",{id:"quasi-real-time-scenarios-resourceefficiency-trade-offs"},"Quasi-real-time scenarios, resource/efficiency trade-offs"),(0,r.kt)("p",null,"Incremental processing of new data in mini batches can use resources more efficiently. Let's refer to a specific example. We have a Kafka event stream that is pouring in\nat a rate of 10,000 per second. We want to count the number of messages in some dimensions over the past 15 minutes. Many stream processing pipelines use an external/internal\nresult state store (such as RocksDB, Cassandra, ElasticSearch) to save the aggregated count results, and run the containers in resource managers such as YARN/Mesos continuously,\nwhich is very reasonable in less than a five-minute delay window scene. In fact, the YARN container itself has some startup overhead. In addition, in order to improve the\nperformance of writing to result storage system, we usually cache the results before performing batch updates. This kind of protocol requires the container to run continuously."),(0,r.kt)("p",null,"However, in quasi-real-time processing scenarios, these options may not be optimal. To achieve the same effect, you can use short-life containers and optimize overall\nresource utilization. For example, a streaming processor may need to perform six million updates to the result storage system in 15 minutes. However, in the incremental\nbatch mode, we only need to perform an in-memory merge on the accumulated data and update the result storage system only once, then only use the resource container for\nfive minutes. Compared with the pure stream processing mode, the incremental batch processing mode has several times the CPU efficiency improvement, and there are several\norders of magnitude efficiency improvement in updating to the result storage. Basically, this processing method obtains resources on demand, instead of swallowing CPU and\nmemory while waiting for data to be calculated in real time."),(0,r.kt)("h3",{id:"incremental-processing-facilitates-unified-data-lake-architecture"},"Incremental processing facilitates unified data lake architecture"),(0,r.kt)("p",null,"Whether in the data warehouse or in the data lake, data processing is an unavoidable problem. Data processing involves the selection of computing engines and\nthe design of architectures. There are currently two mainstream architectures in the industry: Lambda and Kappa architectures. Each architecture has its own\ncharacteristics and existing problems. Derivative versions of these architectures are also ",(0,r.kt)("a",{parentName:"p",href:"https://www.infoq.cn/article/Uo4pFswlMzBVhq*Y2tB9"},"emerging endlessly"),"."),(0,r.kt)("p",null,"In reality, many enterprises still maintain the implementation of the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lambda_architecture"},"Lambda architecture"),".\nThe typical Lambda architecture has two modules for the data processing part: the speed layer and the batch layer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image5",src:a(4309).Z})),(0,r.kt)("p",null,"They are usually two independent implementations (from code to infrastructure). For example, Flink (formerly Storm) is a popular option on the speed layer,\nwhile MapReduce/Spark can serve as a batch layer. In fact, people often rely on the speed layer to provide updated results (which may not be accurate), and\nonce the data is considered complete, the results of the speed layer are corrected at a later time through the batch layer. With incremental processing,\nwe have the opportunity to implement the Lambda architecture for batch processing and quasi-real-time processing at the code level and infrastructure level in\na unified manner. It typically looks like below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image3",src:a(50917).Z})),(0,r.kt)("p",null,'As we said, you can use SQL or a batch processing framework like Spark to consistently implement your processing logic. The result table is built incrementally,\nand SQL is executed on "new data" like streaming to produce a quick view of the results. The same SQL can be executed periodically on the full amount of data to\ncorrect any inaccurate results (remember, join operations are always tricky!) and produce a more "complete" view of the results. In both cases, we will use the\nsame infrastructure to perform calculations, which can reduce overall operating costs and complexity.'),(0,r.kt)("p",null,"Setting aside the Lambda architecture, even in the Kappa architecture, the first primitive of incremental processing (upsert) also plays an important role.\nUber ",(0,r.kt)("a",{parentName:"p",href:"https://www.slideshare.net/FlinkForward/flink-forward-san-francisco-2019-moving-from-lambda-and-kappa-architectures-to-kappa-at-uber-roshan-naik"},"proposed")," the Kappa + architecture\nbased on this. The Kappa architecture advocates a single stream computing layer sufficient to become a general solution\nfor data processing. Although the batch layer is removed in this model, there are still two problems in the service layer:"),(0,r.kt)("p",null,"Now days many stream processing engines support row-level data processing, which requires that our service layer should also support row-level updates;\nThe trade-offs between data ingestion delay, scanning performance and computing resources and operational complexity are unavoidable."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image8",src:a(88263).Z})),(0,r.kt)("p",null,"However, if our business scenarios have low latency requirements, for example, we can accept a delay of about 10 minutes. And if we can quickly ingest and prepare data on DFS,\neffectively connect and propagate updates to the upper-level modeling data set, Speed Serving in the service layer is unnecessary. Then the service layer can be unified,\ngreatly reducing the overall complexity and resource consumption of the system."),(0,r.kt)("p",null,"Above, we introduced the significance of incremental processing for the data lake. Next, we introduce the implementation and support of incremental processing.\nAmong the three open source data lake frameworks (Apache Hudi/Iceberg, Delta Lake), only Apache Hudi provides good support for incremental processing.\nThis is completely rooted in a framework developed by Uber at the time when it encountered the pain points of data analysis on the Hadoop data lake.\nSo, next, let's introduce how Hudi supports incremental processing."),(0,r.kt)("h2",{id:"hudis-support-for-incremental-processing"},"Hudi's support for incremental processing"),(0,r.kt)("p",null,"Apache Hudi (Hadoop Upserts Deletes and Incrementals) is a top-level project of the Apache Foundation. It allows you to process very large-scale data on\ntop of Hadoop-compatible storage, and it also provides two primitives that enable stream processing on the data lake in addition to classic batch processing."),(0,r.kt)("p",null,'From the naming of the letter "I" denotes "Incremental Processing", we can see that it will support incremental processing as a first class citizen.\nThe two primitives we mentioned at the beginning of this article that support incremental processing are reflected in the following two aspects in Apache Hudi:'),(0,r.kt)("p",null,"Update/Delete operation:Hudi provides support for updating/deleting records, using fine-grained file/record level indexes while providing transactional guarantees\nfor the write operation. Queries process the last such committed snapshot, to produce results.."),(0,r.kt)("p",null,"Change stream: Hudi also provides first-class support for obtaining an incremental stream of all the records that were updated/inserted/deleted in a given table, from a given point-in-time."),(0,r.kt)("p",null,'The specific implementation of the change flow is "incremental view". Hudi is the only one of the three open source data lake frameworks that supports\nthe incremental query feature, with support for record level change streams. The following sample code snippet shows us how to query the incremental view:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// spark-shell\n// reload data\nspark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*").\n  createOrReplaceTempView("hudi_trips_snapshot")\n\nval commits = spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_trips_snapshot order by commitTime").map(k => k.getString(0)).take(50)\nval beginTime = commits(commits.length - 2) // commit time we are interested in\n\n// incrementally query data\nval tripsIncrementalDF = spark.read.format("hudi").\n  option(QUERY_TYPE_OPT_KEY, QUERY_TYPE_INCREMENTAL_OPT_VAL).\n  option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n  load(basePath)\ntripsIncrementalDF.createOrReplaceTempView("hudi_trips_incremental")\n\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n\n')),(0,r.kt)("p",null,'The code snippet above creates a Hudi trip increment table (hudi_trips_incremental), and then queries all the change records in the increment table after the "beginTime" submission time\nand the "cost"  is greater than 20.0. Based on this query, you can create incremental data pipelines on batch data.'),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this article, we first elaborated many problems caused by the lack of incremental processing primitives in the traditional Hadoop data warehouse due to the trade-off between data integrity\nand latency, and some long-tail applications that rely heavily on updates. Next, we argued that to support incremental processing, we must have at least two primitives: upsert and\nincremental consumption, and explained why these two primitives can solve the problems explained above."),(0,r.kt)("p",null,'Then, we introduced why incremental processing is also important to the data lake. There are many common parts in data processing between the data lake and the data warehouse.\nIn the data warehouse, some "pain points" caused by the lack of incremental processing also exist in the data lake. We elaborated its significance to the data lake from four\naspects: incremental processing of semantics of natural fit flow, the need for analytical scenarios, quasi-real-time scene resource/efficiency trade-offs, and unified lake architecture.'),(0,r.kt)("p",null,"Finally, we introduced the open source data lake storage framework Apache Hudi's support for incremental processing and simple cases."))}u.isMDXComponent=!0},48881:function(e,t,a){t.Z=a.p+"assets/images/image1-3639ab8c9d27f6e461866dc83e8346c0.png"},8511:function(e,t,a){t.Z=a.p+"assets/images/image2-971db03016b54c2da63fec8a2df4f412.png"},50917:function(e,t,a){t.Z=a.p+"assets/images/image3-8f35b19f5afc8d6b571f4479eb024189.png"},44244:function(e,t,a){t.Z=a.p+"assets/images/image4-e0b30b97adaffc9f1a9cf2eb8f0a9c52.jpg"},4309:function(e,t,a){t.Z=a.p+"assets/images/image5-58bbba66797e915ba7518ad7e61bcd56.png"},20803:function(e,t,a){t.Z=a.p+"assets/images/image6-3f3cbe07ee5f79cce9b6f18241058961.png"},40470:function(e,t,a){t.Z=a.p+"assets/images/image7-b669c80a71be700ccbd8bc0945b5d762.png"},88263:function(e,t,a){t.Z=a.p+"assets/images/image8-953168c35d108f42143d2942a7197941.png"}}]);