"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[69699],{13062:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>v,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"environments/overview","title":"SAP BTP Environments Overview","description":"SAP Business Technology Platform is in the epicenter of countless integration and extension scenarios. The SAP Cloud SDK provides end-to-end support for multiple environments of the SAP BTP to make sure you can develop application and extensions in convenient and effortless way.","source":"@site/docs-java/environments/overview.mdx","sourceDirName":"environments","slug":"/environments/overview","permalink":"/cloud-sdk/docs/java/environments/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java/environments/overview.mdx","tags":[],"version":"current","frontMatter":{"title":"SAP BTP Environments Overview","id":"overview","sidebar_label":"Overview","description":"SAP Business Technology Platform is in the epicenter of countless integration and extension scenarios. The SAP Cloud SDK provides end-to-end support for multiple environments of the SAP BTP to make sure you can develop application and extensions in convenient and effortless way.","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},"sidebar":"docsJavaSidebar","previous":{"title":"Caching","permalink":"/cloud-sdk/docs/java/features/resilience/caching"},"next":{"title":"Cloud Foundry","permalink":"/cloud-sdk/docs/java/environments/cloud-foundry"}}');var n=s(74848),o=s(28453),c=s(4586);const i={title:"SAP BTP Environments Overview",id:"overview",sidebar_label:"Overview",description:"SAP Business Technology Platform is in the epicenter of countless integration and extension scenarios. The SAP Cloud SDK provides end-to-end support for multiple environments of the SAP BTP to make sure you can develop application and extensions in convenient and effortless way.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},r=void 0,d={},u=[{value:"Available Environments",id:"available-environments",level:2}];function l(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/6a2c1ab5a31b4ed9a2ce17a5329e1dd8.html",children:"The SAP Business Technology Platform"})," is an integrated offering.\nIt comprises four technology portfolios:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Database and Data Management"}),"\n",(0,n.jsx)(t.li,{children:"Application Development and Integration"}),"\n",(0,n.jsx)(t.li,{children:"Analytics"}),"\n",(0,n.jsx)(t.li,{children:"and Intelligent Technologies"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The platform offers users the ability to turn data into business value, compose end-to-end business processes, and build and extend SAP applications quickly."}),"\n",(0,n.jsx)(t.h2,{id:"available-environments",children:"Available Environments"}),"\n",(0,n.jsx)(t.p,{children:"The SAP Cloud SDK aims at providing equal support for all the cloud-based environments exposed by the SAP BTP where it makes sense.\nFor more details check the comparability table below and documentation for specific environments."}),"\n",(0,n.jsx)(c.A,{})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4586:(e,t,s)=>{s.d(t,{A:()=>l});var a=s(96540),n=s(9901),o=s(35896),c=s(70323),i=s(44264),r=s(17287),d=s(29593),u=s(74848);function l(){const e=r.qT.filter((e=>"Environment"===e.category)),t=a.useMemo((()=>e),[]),s=a.useMemo((()=>i.fG),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.o,{plugins:[c.A,o.A],children:"**Legend:** :heavy_check_mark: - Generally Available, :x: - Not Available, :gear: - Beta, :date: - Planned"}),(0,u.jsx)(d.A,{columns:s,data:t})]})}},29593:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var a=s(9901),n=s(32885),o=s(70323),c=s(35896),i=s(74848);function r(e){let{columns:t,data:s}=e;const{getTableProps:r,getTableBodyProps:d,headerGroups:u,rows:l,prepareRow:v}=(0,n.useTable)({columns:t,data:s});return(0,i.jsxs)("table",{...r(),children:[(0,i.jsx)("thead",{children:u.map((e=>(0,i.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,i.jsx)("th",{...e.getHeaderProps(),children:e.render("Header")},e.key)))},e.key)))}),(0,i.jsx)("tbody",{...d(),children:l.map(((e,t)=>(v(e),(0,i.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>(0,i.jsx)("td",{...e.getCellProps(),children:(0,i.jsx)(a.o,{remarkPlugins:[o.A,c.A],children:e.value})},e.key)))},e.key))))})]})}},17287:(e,t,s)=>{s.d(t,{qT:()=>i});const a="/cloud-sdk/docs",n=":heavy_check_mark:",o=":x:",c=":warning:",i=[{name:"[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)",category:"Legacy",java:{status:o,docsLink:"",note:"Out of scope. Deprecated since 4.13.0"},js:{status:o,docsLink:"",note:"Take a look at the [node-soap](https://github.com/vpulim/node-soap) library"}},{name:"[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)",category:"Legacy",java:{status:c,docsLink:`[docs](${a}/java/features/bapi-and-rfc/overview)`,note:"Deprecated since 4.13.0"},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)",category:"Legacy",java:{status:c,docsLink:`[docs](${a}/java/features/bapi-and-rfc/overview)`,note:"Deprecated since 4.13.0"},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[OData v2 typed client](https://www.odata.org/documentation/odata-version-2-0/)",category:"OData",java:{status:n,docsLink:`[docs](${a}/java/features/odata/v2-vdm-client)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/odata/v2-client)`,note:""}},{name:"[OData v4 typed client](https://www.odata.org/documentation/)",category:"OData",java:{status:n,docsLink:`[docs](${a}/java/features/odata/v4-vdm-client)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/odata/v4-client)`,note:""}},{name:"Generic not typed OData client",category:"OData",java:{status:n,docsLink:`[docs](${a}/java/features/odata/generic-untyped-odata-client)`,note:""},js:{status:o,docsLink:"",note:`We expose [generic HTTP client](${a}/js/features/connectivity/http-client) aware of connectivity abstractions`}},{name:"[OData code generator](https://www.odata.org/documentation/)",category:"OData",java:{status:n,docsLink:`[docs](${a}/java/features/odata/vdm-generator)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/odata/generate-client)`,note:""}},{name:"OpenAPI 2.0 typed client",category:"OpenAPI",java:{status:n,docsLink:`[docs](${a}/java/features/rest/overview)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/openapi/execute-request)`,note:""}},{name:"OpenAPI 3.0 typed client",category:"OpenAPI",java:{status:n,docsLink:`[docs](${a}/java/features/rest/overview)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/openapi/execute-request)`,note:""}},{name:"OpenAPI code generator",category:"OpenAPI",java:{status:n,docsLink:`[docs](${a}/java/features/rest/generate-rest-client)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/openapi/generate-client)`,note:""}},{name:"Enterprise messaging",category:"Messaging",java:{status:o,docsLink:"",note:""},js:{status:o,docsLink:"",note:""}},{name:"Resilience pattern",category:"Advanced",java:{status:n,docsLink:`[docs](${a}/java/features/resilience)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/guides/resilience)`,note:""}},{name:"Caching pattern",category:"Advanced",java:{status:n,docsLink:`[docs](${a}/java/features/resilience)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/destination-cache)`,note:""}},{name:"[BTP Cloud Foundry Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html)",category:"Environment",java:{status:n,docsLink:`[docs](${a}/java/environments/cloud-foundry)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/getting-started)`,note:""}},{name:"[Kubernetes with SAP Gardener](https://gardener.cloud/)",category:"Environment",java:{status:n,docsLink:`[docs](${a}/java/environments/kubernetes-gardener)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/environments/kubernetes)`,note:""}},{name:"[BTP Kyma Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/468c2f3c3ca24c2c8497ef9f83154c44.html)",category:"Environment",java:{status:n,docsLink:`[docs](${a}/java/environments/kubernetes-kyma)`,note:"[Kyma Open Source project](https://kyma-project.io/)"},js:{status:n,docsLink:`[docs](${a}/js/environments/kyma)`,note:""}},{name:"Deploy with Confidence (DwC)",category:"Environment",java:{status:n,docsLink:"",note:"Internal only or allow listed"},js:{status:o,docsLink:"",note:""}},{name:"[BTP Neo Environment](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)",category:"Environment",java:{status:o,docsLink:"",note:"Out of scope. Deprecated since 4.17.0"},js:{status:o,docsLink:"",note:"Out of scope."}},{name:"[SAP BTP ABAP Environent](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/11d62652aa2b4600a0fa136de0789648.html)",category:"Environment",java:{status:o,docsLink:"",note:"Out of scope"},js:{status:o,docsLink:"",note:"Out of scope"}},{name:"[BTP CF Connectivity Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/313b215066a8400db461b311e01bd99b.html)",category:"Connectivity",java:{status:n,docsLink:`[docs](${a}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/destinations)`,note:""}},{name:"[BTP CF Destination Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)",category:"Connectivity",java:{status:n,docsLink:`[docs](${a}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/destinations)`,note:""}},{name:"[BTP CF XSUAA Service](https://sap.github.io/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service)",category:"Connectivity",java:{status:n,docsLink:`[docs](${a}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/destinations)`,note:""}},{name:"[BTP CF Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)",category:"Connectivity",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:"",note:""}},{name:"Authentication",category:"Connectivity",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/destinations#authentication-and-json-web-token-retrievjal)`,note:""}},{name:"Multi-tenancy",category:"Connectivity",java:{status:n,docsLink:`[docs](${a}/java/features/multi-tenancy/thread-context)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/destinations#multi-tenancy)`,note:""}},{name:"Proxy",category:"Connectivity",java:{status:n,docsLink:`[docs](${a}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/destinations#multi-tenancy)`,note:""}},{name:"HTTP Client wrapper",category:"Connectivity",java:{status:n,docsLink:`[docs](${a}/java/features/connectivity/http-client)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/http-client)`,note:""}},{name:"[Principal propagation](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e2cbb48def4342048362039cc157b12e.html?q=principal)",category:"Connectivity",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/on-premise#principal-propagation)`,note:""}},{name:"[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)",category:"Connectivity",java:{status:n,docsLink:`[docs](${a}/java/features/connectivity/destination-service#connect-to-sap-s4hana-on-premise)`,note:""},js:{status:n,docsLink:`[docs](${a}/js/features/connectivity/on-premise)`,note:""}},{name:"MDI",category:"MDI",java:{status:o,docsLink:"",note:"Out of scope. Deprecated since 4.23.0"},js:{status:o,docsLink:"",note:""}}]},44264:(e,t,s)=>{s.d(t,{Bs:()=>n,Qe:()=>o,fG:()=>c,uC:()=>a});const a=[{Header:"Feature",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],n=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}],o=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],c=[{Header:"Environment",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}]}}]);