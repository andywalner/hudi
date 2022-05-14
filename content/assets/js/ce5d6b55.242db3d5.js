"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[66155],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),s=o,m=f["".concat(u,".").concat(s)]||f[s]||d[s]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49519:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"Monitor Hudi metrics with Datadog",excerpt:"Introducing the feature of reporting Hudi metrics via Datadog HTTP API",author:"rxu",category:"blog"},u=void 0,l={permalink:"/blog/2020/05/28/monitoring-hudi-metrics-with-datadog",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-05-28-monitoring-hudi-metrics-with-datadog.md",source:"@site/blog/2020-05-28-monitoring-hudi-metrics-with-datadog.md",title:"Monitor Hudi metrics with Datadog",description:"Availability",date:"2020-05-28T00:00:00.000Z",formattedDate:"May 28, 2020",tags:[],readingTime:1.415,truncated:!0,authors:[{name:"rxu"}],prevItem:{title:"The Apache Software Foundation Announces Apache\xae Hudi\u2122 as a Top-Level Project",permalink:"/blog/2020/06/04/The-Apache-Software-Foundation-Announces-Apache-Hudi-as-a-Top-Level-Project"},nextItem:{title:"Apache Hudi Support on Apache Zeppelin",permalink:"/blog/2020/04/27/apache-hudi-apache-zepplin"}},p={authorsImageUrls:[void 0]},d=[{value:"Availability",id:"availability",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2}],f={toc:d};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"availability"},"Availability"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"0.6.0 (unreleased)")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/"},"Datadog")," is a popular monitoring service. In the upcoming ",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.0")," release of Apache Hudi, we will introduce the feature of reporting Hudi metrics via Datadog HTTP API, in addition to the current reporter types: Graphite and JMX."))}s.isMDXComponent=!0}}]);