"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[74360],{70237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"overview-cloud-sdk-for-java","title":"Java SDK Overview","description":"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform","source":"@site/docs-java_versioned_docs/version-v3/overview.mdx","sourceDirName":".","slug":"/overview-cloud-sdk-for-java","permalink":"/cloud-sdk/docs/java/v3/overview-cloud-sdk-for-java","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/overview.mdx","tags":[],"version":"v3","frontMatter":{"id":"overview-cloud-sdk-for-java","title":"Java SDK Overview","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Overview","description":"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},"sidebar":"docsJavaSidebar","next":{"title":"Getting Started","permalink":"/cloud-sdk/docs/java/v3/getting-started"}}');var o=a(74848),n=a(28453),c=a(95241),i=a(66279);const d={id:"overview-cloud-sdk-for-java",title:"Java SDK Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},r=void 0,u={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Why the SAP Cloud SDK for Java?",id:"why-the-sap-cloud-sdk-for-java",level:2},{value:"Feature Matrix",id:"feature-matrix",level:2}];function v(e){const t={a:"a",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.A,{}),"\n",(0,o.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,o.jsxs)(t.p,{children:["For a quick start check ",(0,o.jsx)(t.a,{href:"getting-started",children:"getting started"})," section."]}),"\n",(0,o.jsx)(t.h2,{id:"why-the-sap-cloud-sdk-for-java",children:"Why the SAP Cloud SDK for Java?"}),"\n",(0,o.jsx)(t.p,{children:"The SAP Cloud SDK for Java allows you to develop, extend, and communicate with SAP solutions SAP S/4HANA, SAP SuccessFactors, and many others."}),"\n",(0,o.jsx)(t.h2,{id:"feature-matrix",children:"Feature Matrix"}),"\n",(0,o.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}},66279:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(96540),o=a(9901),n=a(35896),c=a(70323),i=a(44264),d=a(17287),r=a(29593),u=a(74848);function l(){const e=s.useMemo((()=>d.qT),[]),t=s.useMemo((()=>i.Bs),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.o,{remarkPlugins:[c.A,n.A],children:"**Legend:** \u2714\ufe0f - Generally Available, \u274c - Not Available, \u2699\ufe0f - Beta, \ud83d\udcc5 - Planned"}),(0,u.jsx)(r.A,{columns:t,data:e})]})}},29593:(e,t,a)=>{a.d(t,{A:()=>d});a(96540);var s=a(9901),o=a(32885),n=a(70323),c=a(35896),i=a(74848);function d(e){let{columns:t,data:a}=e;const{getTableProps:d,getTableBodyProps:r,headerGroups:u,rows:l,prepareRow:v}=(0,o.useTable)({columns:t,data:a});return(0,i.jsxs)("table",{...d(),children:[(0,i.jsx)("thead",{children:u.map((e=>(0,i.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,i.jsx)("th",{...e.getHeaderProps(),children:e.render("Header")},e.key)))},e.key)))}),(0,i.jsx)("tbody",{...r(),children:l.map(((e,t)=>(v(e),(0,i.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>(0,i.jsx)("td",{...e.getCellProps(),children:(0,i.jsx)(s.o,{remarkPlugins:[n.A,c.A],children:e.value})},e.key)))},e.key))))})]})}},17287:(e,t,a)=>{a.d(t,{qT:()=>i});const s="/cloud-sdk/docs",o=":heavy_check_mark:",n=":x:",c=":warning:",i=[{name:"[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)",category:"Legacy",java:{status:n,docsLink:"",note:"Out of scope. Deprecated since 4.13.0"},js:{status:n,docsLink:"",note:"Take a look at the [node-soap](https://github.com/vpulim/node-soap) library"}},{name:"[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)",category:"Legacy",java:{status:c,docsLink:`[docs](${s}/java/features/bapi-and-rfc/overview)`,note:"Deprecated since 4.13.0"},js:{status:n,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)",category:"Legacy",java:{status:c,docsLink:`[docs](${s}/java/features/bapi-and-rfc/overview)`,note:"Deprecated since 4.13.0"},js:{status:n,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[OData v2 typed client](https://www.odata.org/documentation/odata-version-2-0/)",category:"OData",java:{status:o,docsLink:`[docs](${s}/java/features/odata/v2-vdm-client)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript)`,note:""}},{name:"[OData v4 typed client](https://www.odata.org/documentation/)",category:"OData",java:{status:o,docsLink:`[docs](${s}/java/features/odata/v4-vdm-client)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)`,note:""}},{name:"Generic not typed OData client",category:"OData",java:{status:o,docsLink:`[docs](${s}/java/features/odata/generic-untyped-odata-client)`,note:""},js:{status:n,docsLink:"",note:`We expose [generic HTTP client](${s}/js/features/connectivity/generic-http-client) aware of connectivity abstractions`}},{name:"[OData code generator](https://www.odata.org/documentation/)",category:"OData",java:{status:o,docsLink:`[docs](${s}/java/features/odata/vdm-generator)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/odata/generate-odata-client)`,note:""}},{name:"OpenAPI 2.0 typed client",category:"OpenAPI",java:{status:o,docsLink:`[docs](${s}/java/features/rest/overview)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI 3.0 typed client",category:"OpenAPI",java:{status:o,docsLink:`[docs](${s}/java/features/rest/overview)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI code generator",category:"OpenAPI",java:{status:o,docsLink:`[docs](${s}/java/features/rest/generate-rest-client)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/openapi/generate-openapi-client)`,note:""}},{name:"Enterprise messaging",category:"Messaging",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:"",note:""}},{name:"Resilience pattern",category:"Advanced",java:{status:o,docsLink:`[docs](${s}/java/features/resilience)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/guides/resilience)`,note:""}},{name:"Caching pattern",category:"Advanced",java:{status:o,docsLink:`[docs](${s}/java/features/resilience)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination-cache)`,note:""}},{name:"[BTP Cloud Foundry Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html)",category:"Environment",java:{status:o,docsLink:`[docs](${s}/java/environments/cloud-foundry)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"[Kubernetes with SAP Gardener](https://gardener.cloud/)",category:"Environment",java:{status:o,docsLink:`[docs](${s}/java/environments/kubernetes-gardener)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes)`,note:""}},{name:"[BTP Kyma Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/468c2f3c3ca24c2c8497ef9f83154c44.html)",category:"Environment",java:{status:o,docsLink:`[docs](${s}/java/environments/kubernetes-kyma)`,note:"[Kyma Open Source project](https://kyma-project.io/)"},js:{status:o,docsLink:`[docs](${s}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"Deploy with Confidence (DwC)",category:"Environment",java:{status:o,docsLink:"",note:"Internal only or allow listed"},js:{status:n,docsLink:"",note:""}},{name:"[BTP Neo Environment](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)",category:"Environment",java:{status:n,docsLink:"",note:"Out of scope. Deprecated since 4.17.0"},js:{status:n,docsLink:"",note:"Out of scope."}},{name:"[SAP BTP ABAP Environent](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/11d62652aa2b4600a0fa136de0789648.html)",category:"Environment",java:{status:n,docsLink:"",note:"Out of scope"},js:{status:n,docsLink:"",note:"Out of scope"}},{name:"[BTP CF Connectivity Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/313b215066a8400db461b311e01bd99b.html)",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Destination Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF XSUAA Service](https://sap.github.io/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service)",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)",category:"Connectivity",java:{status:o,docsLink:"",note:""},js:{status:o,docsLink:"",note:""}},{name:"Authentication",category:"Connectivity",java:{status:o,docsLink:"",note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination#authentication-and-json-web-token-retrievjal)`,note:""}},{name:"Multi-tenancy",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/multi-tenancy/thread-context)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"Proxy",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"HTTP Client wrapper",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/http-client)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/generic-http-client)`,note:""}},{name:"[Principal propagation](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e2cbb48def4342048362039cc157b12e.html?q=principal)",category:"Connectivity",java:{status:o,docsLink:"",note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/on-premise#principal-propagation)`,note:""}},{name:"[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)",category:"Connectivity",java:{status:o,docsLink:`[docs](${s}/java/features/connectivity/destination-service#connect-to-sap-s4hana-on-premise)`,note:""},js:{status:o,docsLink:`[docs](${s}/js/features/connectivity/on-premise)`,note:""}},{name:"MDI",category:"MDI",java:{status:n,docsLink:"",note:"Out of scope. Deprecated since 4.23.0"},js:{status:n,docsLink:"",note:""}}]},44264:(e,t,a)=>{a.d(t,{Bs:()=>o,Qe:()=>n,fG:()=>c,uC:()=>s});const s=[{Header:"Feature",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],o=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}],n=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],c=[{Header:"Environment",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}]},95241:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(74848);const o=function(e){let{align:t}=e;return(0,s.jsx)("span",{className:t?"col text--right":"",children:(0,s.jsx)("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom",children:(0,s.jsx)("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})})})}}}]);