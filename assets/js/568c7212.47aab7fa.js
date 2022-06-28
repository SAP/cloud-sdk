"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5417],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(o),f=a,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return o?n.createElement(v,i(i({ref:t},u),{},{components:o})):n.createElement(v,i({ref:t},u))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},18476:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],c={id:"video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",sidebar_label:"Destinations and Cloud Connector",description:"You will learn how to generate type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},l=void 0,s={unversionedId:"java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",id:"java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",description:"You will learn how to generate type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Business Technology Platform",source:"@site/docs/java/video/connectivity-service.mdx",sourceDirName:"java/video",slug:"/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/video/connectivity-service.mdx",tags:[],version:"current",lastUpdatedBy:"Florian Wilhelm",lastUpdatedAt:1656403886,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",sidebar_label:"Destinations and Cloud Connector",description:"You will learn how to generate type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Generate OData Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java"},next:{title:"Use OData v4 Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"}},u={},d=[{value:"Looking for More?",id:"looking-for-more",level:2}],p={toc:d};function f(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cloud-native applications are no piece of cake when you have to connect to ",(0,r.kt)("strong",{parentName:"p"},"On-premise")," systems and deliver Apps or extensions on top of that.\nWell, in SAP Cloud SDK for Java we think otherwise!\nTo prove it, we provide convenient abstractions over destinations to let you seamlessly connect to your ",(0,r.kt)("strong",{parentName:"p"},"On-premise")," system from your cloud app.\nWhat to know how?\nWatch this comprehensive video tutorial by ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"},"Max Streifeneder")," and check our docs on ",(0,r.kt)("a",{parentName:"p",href:"../features/connectivity/sdk-connectivity-destination-service"},"connectivity")),(0,r.kt)("div",{class:"sdk-video-container"},(0,r.kt)("iframe",{class:"sdk-video",src:"https://www.youtube.com/embed/Ky1R0Yq-zKg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"looking-for-more"},"Looking for More?"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"},"Max's channel")," for other videos on SAP Cloud SDK and other SAP technologies.\nHe speaks about difficult enterprise software topics and helps to navigate the vast SAP Cloud ecosystem to help you deliver beautiful Apps and Extensions for SAP S/4HANA and other popular SAP products."))}f.isMDXComponent=!0}}]);