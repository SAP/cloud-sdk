"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[91817],{77167:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"release-notes","title":"Release Notes","description":"Release notes of the SAP Cloud SDK for JavaScript and TypeScript, stay up to date with the recent features, fixes, dependency updates, and recommendations.","source":"@site/docs-js/release-notes.mdx","sourceDirName":".","slug":"/release-notes","permalink":"/cloud-sdk/docs/js/v4/release-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/release-notes.mdx","tags":[],"version":"current","frontMatter":{"id":"release-notes","title":"Release Notes","sidebar_label":"Release Notes","description":"Release notes of the SAP Cloud SDK for JavaScript and TypeScript, stay up to date with the recent features, fixes, dependency updates, and recommendations.","keywords":["sap","cloud","sdk","cloud-native","cloud sdk","sap cloud sdk"]},"sidebar":"docsJsSidebar","previous":{"title":"SAP Cloud SDK & CAP","permalink":"/cloud-sdk/docs/js/v4/video/calm"},"next":{"title":"Support","permalink":"/cloud-sdk/docs/js/v4/support"}}');var i=s(74848),o=s(28453),d=s(81209),c=s(98944);const r={id:"release-notes",title:"Release Notes",sidebar_label:"Release Notes",description:"Release notes of the SAP Cloud SDK for JavaScript and TypeScript, stay up to date with the recent features, fixes, dependency updates, and recommendations.",keywords:["sap","cloud","sdk","cloud-native","cloud sdk","sap cloud sdk"]},a=void 0,l={},h=[{value:"4.0.0 [Core Modules] - March 04, 2025",id:"400-core-modules---march-04-2025",level:2},{value:"Compatibility Notes",id:"compatibility-notes",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{}),"\n",(0,i.jsx)(c.A,{}),"\n",(0,i.jsx)(n.h2,{id:"400-core-modules---march-04-2025",children:"4.0.0 [Core Modules] - March 04, 2025"}),"\n",(0,i.jsx)(n.h3,{id:"compatibility-notes",children:"Compatibility Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[connectivity] The following deprecated content has been removed from the package:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The behaviour of ",(0,i.jsx)(n.code,{children:"getAgentConfig()"})," function is changed to be asynchronous. The temporary asynchronous function ",(0,i.jsx)(n.code,{children:"getAgentConfigAsync()"})," has been removed."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"destinationForServiceBinding()"})," function has been removed. Use ",(0,i.jsx)(n.code,{children:"getDestinationFromServiceBinding()"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"PartialDestinationFetchOptions"})," type has been removed. Use either ",(0,i.jsx)(n.code,{children:"ServiceBindingTransformOptions"})," or ",(0,i.jsx)(n.code,{children:"getDestinationFromServiceBinding()"})," function."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"serviceToken()"})," function no longer takes ",(0,i.jsx)(n.code,{children:"xsuaaCredentials"})," as part of the ",(0,i.jsx)(n.code,{children:"options"})," parameter."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"parseDestination()"})," function is no longer a public API."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"DestinationForServiceBindingOptions"})," interface has been renamed to ",(0,i.jsx)(n.code,{children:"DestinationFromServiceBindingOptions"}),". (7d92a1b)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["[connectivity] Enable destination caching by default when retrieving destinations via the destination service. Change affects behavior of ",(0,i.jsx)(n.code,{children:"getDestination()"})," method, ",(0,i.jsx)(n.code,{children:"getAllDestinationsFromDestinationService()"})," method, generated client's ",(0,i.jsx)(n.code,{children:"execute()"})," method and generic HTTP requests execution using ",(0,i.jsx)(n.code,{children:"executeHttpRequest()"}),". (d69325a)"]}),"\n",(0,i.jsxs)(n.li,{children:["[connectivity] Disable ",(0,i.jsx)(n.code,{children:"iasToXsuaaTokenExchange"})," by default if not defined. (25c9dd8)"]}),"\n",(0,i.jsxs)(n.li,{children:["[odata-common] The following deprecated content has been removed from the package:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"FunctionImportParameters"})," type has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationParameters"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ODataFunctionImportRequestConfig"})," constant has been removed. Use ",(0,i.jsx)(n.code,{children:"ODataFunctionRequestConfig"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"FunctionImportParameter"})," constant has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationParameter"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ActionFunctionImportRequestBuilderBase"})," constant has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationRequestBuilderBase"})," instead. (7d92a1b)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["[odata-v2] The following deprecated content has been removed from the package:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ODataFunctionImportRequestConfig"})," constant has been removed. Use ",(0,i.jsx)(n.code,{children:"ODataFunctionRequestConfig"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"FunctionImportRequestBuilder"})," constant has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationRequestBuilder"})," instead. (7d92a1b)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["[odata-v4] The following deprecated content has been removed from the package:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ODataFunctionImportRequestConfig"})," constant has been removed. Use ",(0,i.jsx)(n.code,{children:"ODataFunctionRequestConfig"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ActionImportParameter"})," class has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationParameter"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ActionImportParameters"})," type has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationParameters"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"FunctionImportRequestBuilder"})," class has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationRequestBuilder"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"BoundFunctionImportRequestBuilder"})," class has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationRequestBuilder"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"BoundActionImportRequestBuilder"})," class has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationRequestBuilder"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ODataActionImportRequestConfig"})," constant has been removed. Use ",(0,i.jsx)(n.code,{children:"ODataActionRequestConfig"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ODataBoundActionImportRequestConfig"})," class has been removed. Use ",(0,i.jsx)(n.code,{children:"ODataBoundActionRequestConfig"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"OdataBoundFunctionImportRequestConfig"})," constant has been removed. Use ",(0,i.jsx)(n.code,{children:"ODataBoundFunctionRequestConfig"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ActionImportRequestBuilder"})," class has been removed. Use ",(0,i.jsx)(n.code,{children:"OperationRequestBuilder"})," instead. (7d92a1b)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["[resilience] The following deprecated content has been removed from the package:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"circuitBreakerHttp"})," constant has been removed. Use ",(0,i.jsx)(n.code,{children:"circuitBreaker"})," instead. (7d92a1b)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["[util] The following deprecated content has been removed from the package:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"assoc"})," constant has been removed. There is no replacement. (7d92a1b)"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},81209:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(74848);const i=function(e){let{align:n}=e;return(0,t.jsx)("span",{className:n?"col text--right":"",children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk-js",children:(0,t.jsx)("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})})})}},98944:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(74848);const i=function(e){let{align:n}=e;return(0,t.jsx)("span",{className:n?"col text--right":"",children:(0,t.jsx)("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow",children:(0,t.jsx)("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})})})}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(96540);const i={},o=t.createContext(i);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);