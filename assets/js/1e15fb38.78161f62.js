"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[89002],{82341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"overview","title":"Overview","description":"The SAP Cloud SDK for JavaScript significantly simplifies extending and developing applications with the SAP Business Technology Platform","source":"@site/docs-js_versioned_docs/version-v1/overview.mdx","sourceDirName":".","slug":"/overview","permalink":"/cloud-sdk/docs/js/v1/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/overview.mdx","tags":[],"version":"v1","frontMatter":{"id":"overview","title":"Overview","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Overview","description":"The SAP Cloud SDK for JavaScript significantly simplifies extending and developing applications with the SAP Business Technology Platform","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},"sidebar":"docsJsSidebar","next":{"title":"Getting Started","permalink":"/cloud-sdk/docs/js/v1/getting-started"}}');var n=a(74848),o=a(28453),c=a(37120),i=a(29030),r=a(39324);const d={id:"overview",title:"Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"The SAP Cloud SDK for JavaScript significantly simplifies extending and developing applications with the SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},l=void 0,u={},p=[{value:"Quick Start",id:"quick-start",level:2},{value:"What is the SAP Cloud SDK for JavaScript?",id:"what-is-the-sap-cloud-sdk-for-javascript",level:2},{value:"The Core Libraries",id:"the-core-libraries",level:3},{value:"<code>@sap-cloud-sdk/connectivity</code>",id:"sap-cloud-sdkconnectivity",level:4},{value:"<code>@sap-cloud-sdk/http-client</code>",id:"sap-cloud-sdkhttp-client",level:4},{value:"<code>@sap-cloud-sdk/odata-v2</code>, <code>@sap-cloud-sdk/odata-v4</code>, and <code>@sap-cloud-sdk/openapi</code>",id:"sap-cloud-sdkodata-v2-sap-cloud-sdkodata-v4-and-sap-cloud-sdkopenapi",level:4},{value:"<code>@sap-cloud-sdk/generator</code> and <code>@sap-cloud-sdk/openapi-generator</code>",id:"sap-cloud-sdkgenerator-and-sap-cloud-sdkopenapi-generator",level:4},{value:"Pregenerated Client Libraries",id:"pregenerated-client-libraries",level:3},{value:"Feature Matrix",id:"feature-matrix",level:2},{value:"Comparison with SAP OData Library",id:"comparison-with-sap-odata-library",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsxs)(t.p,{children:["For a quick start check out the ",(0,n.jsx)(t.a,{href:"getting-started",children:'"Getting Started"'})," page."]}),"\n",(0,n.jsx)(t.h2,{id:"what-is-the-sap-cloud-sdk-for-javascript",children:"What is the SAP Cloud SDK for JavaScript?"}),"\n",(0,n.jsx)(t.p,{children:"The SAP Cloud SDK for JavaScript is a set of libraries that reduces the effort of building applications on the SAP Business Technology Platform (SAP BTP).\nIt abstracts common tasks on SAP BTP so that you can concentrate on your business logic instead of writing boiler plate code.\nThe image below shows the general architecture of an application built with the SAP Cloud SDK."}),"\n",(0,n.jsx)(r.A,{alt:"General architecture",sources:{light:(0,i.Ay)("img/general-architecture_light.svg"),dark:(0,i.Ay)("img/general-architecture_dark.svg")},className:"center",width:"100%"}),"\n",(0,n.jsx)(t.p,{children:"The SAP Cloud SDK consists of two major parts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the core libraries"}),"\n",(0,n.jsx)(t.li,{children:"the pregenerated client libraries"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"the-core-libraries",children:"The Core Libraries"}),"\n",(0,n.jsxs)(t.p,{children:["The core libraries are the heart of the SAP Cloud SDK for JavaScript.\nThose libraries contain the request execution and connectivity logic as well as command line interfaces (CLIs) to generate OData and OpenApi clients.\nThe image below shows the relationship between the individual core libraries.\nAll core libraries are available as open source npm packages in the ",(0,n.jsx)(t.code,{children:"@sap-cloud-sdk"})," scope on npm."]}),"\n",(0,n.jsx)(r.A,{alt:"Core packages",sources:{light:(0,i.Ay)("img/packages_light.svg"),dark:(0,i.Ay)("img/packages_dark.svg")},className:"center",width:"500px"}),"\n",(0,n.jsx)(t.h4,{id:"sap-cloud-sdkconnectivity",children:(0,n.jsx)(t.code,{children:"@sap-cloud-sdk/connectivity"})}),"\n",(0,n.jsxs)(t.p,{children:["The connectivity library provides functionality to read and exchange with services like the destination, XSUAA, and connectivity service.\nIt provides the basic types needed to reflect the concept of a ",(0,n.jsx)(t.a,{href:"features/connectivity/destinations",children:"destination"})," throughout the SAP Cloud SDK for JavaScript."]}),"\n",(0,n.jsx)(t.h4,{id:"sap-cloud-sdkhttp-client",children:(0,n.jsx)(t.code,{children:"@sap-cloud-sdk/http-client"})}),"\n",(0,n.jsx)(t.p,{children:"The HTTP client library is a thin HTTP client, that allows you to execute requests by leveraging the concept of destinations.\nYou can flexibly configure a request to your needs and send arbitrary HTTP requests to the given destination."}),"\n",(0,n.jsxs)(t.h4,{id:"sap-cloud-sdkodata-v2-sap-cloud-sdkodata-v4-and-sap-cloud-sdkopenapi",children:[(0,n.jsx)(t.code,{children:"@sap-cloud-sdk/odata-v2"}),", ",(0,n.jsx)(t.code,{children:"@sap-cloud-sdk/odata-v4"}),", and ",(0,n.jsx)(t.code,{children:"@sap-cloud-sdk/openapi"})]}),"\n",(0,n.jsx)(t.p,{children:"The OData v2, v4, and OpenAPI libraries build the foundation for client libraries (custom and pregenerated).\nThey contain OData and OpenAPI-specific abstractions, that the client libraries use to expose their APIs."}),"\n",(0,n.jsxs)(t.h4,{id:"sap-cloud-sdkgenerator-and-sap-cloud-sdkopenapi-generator",children:[(0,n.jsx)(t.code,{children:"@sap-cloud-sdk/generator"})," and ",(0,n.jsx)(t.code,{children:"@sap-cloud-sdk/openapi-generator"})]}),"\n",(0,n.jsx)(t.p,{children:"The OData and OpenAPI generators are CLIs that generate client libraries based on the services' specifications (either EDMX format or OpenAPI/Swagger).\nYou can use them to generate your clients.\nThe pregenerated client libraries are generated using these generators."}),"\n",(0,n.jsx)(t.h3,{id:"pregenerated-client-libraries",children:"Pregenerated Client Libraries"}),"\n",(0,n.jsx)(t.p,{children:"While you can generate your libraries, the SAP Cloud SDK for JavaScript provides pregenerated client libraries for the SAP S/4HANA Cloud and On-Premise APIs as well as the SAP Workflow service.\nThese libraries are published under the SAP Developer license agreement and are free to use."}),"\n",(0,n.jsx)(t.h2,{id:"feature-matrix",children:"Feature Matrix"}),"\n",(0,n.jsx)(c.A,{}),"\n",(0,n.jsx)(t.h2,{id:"comparison-with-sap-odata-library",children:"Comparison with SAP OData Library"}),"\n",(0,n.jsxs)(t.p,{children:["There is also a second open-source library for consuming OData services developed by SAP.\nThe ",(0,n.jsx)(t.a,{href:"https://github.com/SAP/odata-library",children:"SAP OData library"})," is developed by a different team than the SAP Cloud SDK.\nIt evaluates service specifications at runtime and helps you execute requests.\nThe table below tries to draw a line between the two open source libraries:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"OData library"}),(0,n.jsx)(t.th,{children:"SAP Cloud SDK"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Supports JavaScript."}),(0,n.jsx)(t.td,{children:"Supports JavaScript and TypeScript."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Operates dynamically on the metadata and creates an on-the-fly-client."}),(0,n.jsxs)(t.td,{children:["Uses pregenerated clients at runtime. For many standard systems like SAP S/4HANA, clients are available via ",(0,n.jsx)(t.code,{children:"npm"})," or can be generated with the ",(0,n.jsx)(t.a,{href:"/cloud-sdk/docs/js/features/odata/generate-client",children:"generator"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Connectivity needs to be handled manually."}),(0,n.jsxs)(t.td,{children:["The SAP Cloud SDK handles ",(0,n.jsx)(t.a,{href:"/cloud-sdk/docs/js/features/connectivity/destinations",children:"connectivity"})," on the SAP BTP for you."]})]})]})]})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},37120:(e,t,a)=>{a.d(t,{A:()=>u});var s=a(96540),n=a(9901),o=a(44264),c=a(17287),i=a(70323),r=a(35896),d=a(29593),l=a(74848);function u(){const e=s.useMemo((()=>c.qT),[]),t=s.useMemo((()=>o.Qe),[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.o,{remarkPlugins:[i.A,r.A],children:"**Legend:** :heavy_check_mark: - Generally Available, :x: - Not Available, :gear: - Beta, :date: - Planned"}),(0,l.jsx)(d.A,{columns:t,data:e})]})}},29593:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(9901),n=a(32885),o=a(70323),c=a(35896),i=a(74848);function r(e){let{columns:t,data:a}=e;const{getTableProps:r,getTableBodyProps:d,headerGroups:l,rows:u,prepareRow:p}=(0,n.useTable)({columns:t,data:a});return(0,i.jsxs)("table",{...r(),children:[(0,i.jsx)("thead",{children:l.map((e=>(0,i.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,i.jsx)("th",{...e.getHeaderProps(),children:e.render("Header")},e.key)))},e.key)))}),(0,i.jsx)("tbody",{...d(),children:u.map(((e,t)=>(p(e),(0,i.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>(0,i.jsx)("td",{...e.getCellProps(),children:(0,i.jsx)(s.o,{remarkPlugins:[o.A,c.A],children:e.value})},e.key)))},e.key))))})]})}},17287:(e,t,a)=>{a.d(t,{qT:()=>i});const s="/cloud-sdk/docs",n=":heavy_check_mark:",o=":x:",c=":warning:",i=[{name:"[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)",category:"Legacy",java:{status:o,docsLink:"",note:"Out of scope. Deprecated since 4.13.0"},js:{status:o,docsLink:"",note:"Take a look at the [node-soap](https://github.com/vpulim/node-soap) library"}},{name:"[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)",category:"Legacy",java:{status:c,docsLink:`[docs](${s}/java/features/bapi-and-rfc/overview)`,note:"Deprecated since 4.13.0"},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)",category:"Legacy",java:{status:c,docsLink:`[docs](${s}/java/features/bapi-and-rfc/overview)`,note:"Deprecated since 4.13.0"},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[OData v2 typed client](https://www.odata.org/documentation/odata-version-2-0/)",category:"OData",java:{status:n,docsLink:`[docs](${s}/java/features/odata/v2-vdm-client)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript)`,note:""}},{name:"[OData v4 typed client](https://www.odata.org/documentation/)",category:"OData",java:{status:n,docsLink:`[docs](${s}/java/features/odata/v4-vdm-client)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)`,note:""}},{name:"Generic not typed OData client",category:"OData",java:{status:n,docsLink:`[docs](${s}/java/features/odata/generic-untyped-odata-client)`,note:""},js:{status:o,docsLink:"",note:`We expose [generic HTTP client](${s}/js/features/connectivity/generic-http-client) aware of connectivity abstractions`}},{name:"[OData code generator](https://www.odata.org/documentation/)",category:"OData",java:{status:n,docsLink:`[docs](${s}/java/features/odata/vdm-generator)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/odata/generate-odata-client)`,note:""}},{name:"OpenAPI 2.0 typed client",category:"OpenAPI",java:{status:n,docsLink:`[docs](${s}/java/features/rest/overview)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI 3.0 typed client",category:"OpenAPI",java:{status:n,docsLink:`[docs](${s}/java/features/rest/overview)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI code generator",category:"OpenAPI",java:{status:n,docsLink:`[docs](${s}/java/features/rest/generate-rest-client)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/openapi/generate-openapi-client)`,note:""}},{name:"Enterprise messaging",category:"Messaging",java:{status:o,docsLink:"",note:""},js:{status:o,docsLink:"",note:""}},{name:"Resilience pattern",category:"Advanced",java:{status:n,docsLink:`[docs](${s}/java/features/resilience)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/guides/resilience)`,note:""}},{name:"Caching pattern",category:"Advanced",java:{status:n,docsLink:`[docs](${s}/java/features/resilience)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination-cache)`,note:""}},{name:"[BTP Cloud Foundry Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html)",category:"Environment",java:{status:n,docsLink:`[docs](${s}/java/environments/cloud-foundry)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"[Kubernetes with SAP Gardener](https://gardener.cloud/)",category:"Environment",java:{status:n,docsLink:`[docs](${s}/java/environments/kubernetes-gardener)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes)`,note:""}},{name:"[BTP Kyma Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/468c2f3c3ca24c2c8497ef9f83154c44.html)",category:"Environment",java:{status:n,docsLink:`[docs](${s}/java/environments/kubernetes-kyma)`,note:"[Kyma Open Source project](https://kyma-project.io/)"},js:{status:n,docsLink:`[docs](${s}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"Deploy with Confidence (DwC)",category:"Environment",java:{status:n,docsLink:"",note:"Internal only or allow listed"},js:{status:o,docsLink:"",note:""}},{name:"[BTP Neo Environment](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)",category:"Environment",java:{status:o,docsLink:"",note:"Out of scope. Deprecated since 4.17.0"},js:{status:o,docsLink:"",note:"Out of scope."}},{name:"[SAP BTP ABAP Environent](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/11d62652aa2b4600a0fa136de0789648.html)",category:"Environment",java:{status:o,docsLink:"",note:"Out of scope"},js:{status:o,docsLink:"",note:"Out of scope"}},{name:"[BTP CF Connectivity Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/313b215066a8400db461b311e01bd99b.html)",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Destination Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF XSUAA Service](https://sap.github.io/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service)",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)",category:"Connectivity",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:"",note:""}},{name:"Authentication",category:"Connectivity",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination#authentication-and-json-web-token-retrievjal)`,note:""}},{name:"Multi-tenancy",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/multi-tenancy/thread-context)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"Proxy",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"HTTP Client wrapper",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/http-client)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/generic-http-client)`,note:""}},{name:"[Principal propagation](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e2cbb48def4342048362039cc157b12e.html?q=principal)",category:"Connectivity",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/on-premise#principal-propagation)`,note:""}},{name:"[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service#connect-to-sap-s4hana-on-premise)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/on-premise)`,note:""}},{name:"MDI",category:"MDI",java:{status:o,docsLink:"",note:"Out of scope. Deprecated since 4.23.0"},js:{status:o,docsLink:"",note:""}}]},44264:(e,t,a)=>{a.d(t,{Bs:()=>n,Qe:()=>o,fG:()=>c,uC:()=>s});const s=[{Header:"Feature",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],n=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}],o=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],c=[{Header:"Environment",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}]}}]);