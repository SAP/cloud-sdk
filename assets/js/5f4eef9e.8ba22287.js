"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8017],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>v});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(o),v=n,f=p["".concat(s,".").concat(v)]||p[v]||u[v]||r;return o?a.createElement(f,i(i({ref:t},d),{},{components:o})):a.createElement(f,i({ref:t},d))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},22145:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=o(87462),n=(o(67294),o(3905));const r={id:"video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",sidebar_label:"Destinations and Cloud Connector",description:"You will learn how to generate type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},i=void 0,c={unversionedId:"video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",id:"video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",description:"You will learn how to generate type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Business Technology Platform",source:"@site/docs-java/video/connectivity-service.mdx",sourceDirName:"video",slug:"/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/video/connectivity-service.mdx",tags:[],version:"current",frontMatter:{id:"video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",sidebar_label:"Destinations and Cloud Connector",description:"You will learn how to generate type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Generate OData Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java"},next:{title:"Use OData v4 Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"}},s={},l=[{value:"Looking for More?",id:"looking-for-more",level:2}],d={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cloud-native applications are no piece of cake when you have to connect to ",(0,n.kt)("strong",{parentName:"p"},"On-premise")," systems and deliver Apps or extensions on top of that.\nWell, in SAP Cloud SDK for Java we think otherwise!\nTo prove it, we provide convenient abstractions over destinations to let you seamlessly connect to your ",(0,n.kt)("strong",{parentName:"p"},"On-premise")," system from your cloud app.\nWhat to know how?\nWatch this comprehensive video tutorial by ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"},"Max Streifeneder")," and check our docs on ",(0,n.kt)("a",{parentName:"p",href:"../features/connectivity/sdk-connectivity-destination-service"},"connectivity")),(0,n.kt)("div",{class:"sdk-video-container"},(0,n.kt)("iframe",{class:"sdk-video",src:"https://www.youtube.com/embed/Ky1R0Yq-zKg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h2",{id:"looking-for-more"},"Looking for More?"),(0,n.kt)("p",null,"Check out ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"},"Max's channel")," for other videos on SAP Cloud SDK and other SAP technologies.\nHe speaks about difficult enterprise software topics and helps to navigate the vast SAP Cloud ecosystem .\nTo help you deliver beautiful Apps and Extensions for SAP S/4HANA and other popular SAP products."))}u.isMDXComponent=!0}}]);