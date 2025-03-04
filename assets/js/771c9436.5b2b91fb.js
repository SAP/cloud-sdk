"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7628,11023,42777,44617,54237,85436,97852],{76420:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"features/common/csrf-token","title":"csrf-token","description":"To create, update, and delete requests the SAP Cloud SDK will try to send a CSRF token.","source":"@site/docs-js/features/common/csrf-token.mdx","sourceDirName":"features/common","slug":"/features/common/csrf-token","permalink":"/cloud-sdk/docs/js/features/common/csrf-token","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/csrf-token.mdx","tags":[],"version":"current","frontMatter":{}}');var r=s(74848),i=s(28453);const a={},o=void 0,d={},c=[];function l(e){const t={a:"a",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.p,{children:["To create, update, and delete requests the SAP Cloud SDK will try to send a ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery#Cookie-to-header_token",children:"CSRF token"}),".\nUpon execution, the request will try to fetch a token first before issuing the create request.\nMany services require this behavior for security reasons.\nHowever, the create request will be made without a CSRF token if none could be obtained."]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},96336:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"features/common/custom-request-config-note","title":"custom-request-config-note","description":"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:","source":"@site/docs-js/features/common/custom-request-config-note.mdx","sourceDirName":"features/common","slug":"/features/common/custom-request-config-note","permalink":"/cloud-sdk/docs/js/features/common/custom-request-config-note","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/custom-request-config-note.mdx","tags":[],"version":"current","frontMatter":{}}');var r=s(74848),i=s(28453);const a={},o=void 0,d={},c=[];function l(e){const t={admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"url"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"baseURL"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"data"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"headers"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"params"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},14383:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"features/common/custom-request-config","title":"custom-request-config","description":"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.","source":"@site/docs-js/features/common/custom-request-config.mdx","sourceDirName":"features/common","slug":"/features/common/custom-request-config","permalink":"/cloud-sdk/docs/js/features/common/custom-request-config","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/custom-request-config.mdx","tags":[],"version":"current","frontMatter":{}}');var r=s(74848),i=s(28453);const a={},o=void 0,d={},c=[];function l(e){const t={a:"a",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.p,{children:["By default, the SAP Cloud SDK uses ",(0,r.jsx)(t.a,{href:"https://github.com/axios/axios",children:"axios"})," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most request options including ",(0,r.jsx)(t.code,{children:"url"}),", ",(0,r.jsx)(t.code,{children:"headers"}),", etc.\nYou can provide a custom request configuration to pass additional options to axios.\nThe example below demonstrates how to configure the response data type, typically used when downloading a file from an endpoint."]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},87862:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"features/common/execute-raw-overview","title":"execute-raw-overview","description":"In addition to the execute() method, you can execute a request using the executeRaw() method.","source":"@site/docs-js/features/common/execute-raw-overview.mdx","sourceDirName":"features/common","slug":"/features/common/execute-raw-overview","permalink":"/cloud-sdk/docs/js/features/common/execute-raw-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/execute-raw-overview.mdx","tags":[],"version":"current","frontMatter":{}}');var r=s(74848),i=s(28453);const a={},o=void 0,d={},c=[];function l(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In addition to the ",(0,r.jsx)(t.code,{children:"execute()"})," method, you can execute a request using the ",(0,r.jsx)(t.code,{children:"executeRaw()"})," method.\nIt returns an ",(0,r.jsx)(t.code,{children:"HttpResponse"})," instance, which contains the following properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"status"}),": the status code of the response"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"headers"}),": the response headers"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data"}),": the response body"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"request"}),": the original request"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},59979:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"features/common/execute-raw-use-cases","title":"execute-raw-use-cases","description":"Typical cases, where you might need to use the executeRaw() method are:","source":"@site/docs-js/features/common/execute-raw-use-cases.mdx","sourceDirName":"features/common","slug":"/features/common/execute-raw-use-cases","permalink":"/cloud-sdk/docs/js/features/common/execute-raw-use-cases","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/execute-raw-use-cases.mdx","tags":[],"version":"current","frontMatter":{}}');var r=s(74848),i=s(28453);const a={},o=void 0,d={},c=[];function l(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Typical cases, where you might need to use the ",(0,r.jsx)(t.code,{children:"executeRaw()"})," method are:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"You need additional information about the response, like the status code or response headers."}),"\n",(0,r.jsx)(t.li,{children:"You need additional information about the request, like payload, method, or request headers."}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"execute()"})," method is omitted in some request builders because the response data cannot be deserialized by the request builder."]}),"\n",(0,r.jsx)(t.li,{children:"Debugging purposes."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28501:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"features/common/skip-csrf-token","title":"skip-csrf-token","description":"For some services, the CSRF token is not required even for non-GET requests.","source":"@site/docs-js/features/common/skip-csrf-token.mdx","sourceDirName":"features/common","slug":"/features/common/skip-csrf-token","permalink":"/cloud-sdk/docs/js/features/common/skip-csrf-token","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/skip-csrf-token.mdx","tags":[],"version":"current","frontMatter":{}}');var r=s(74848),i=s(28453);const a={},o=void 0,d={},c=[];function l(e){const t={code:"code",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.p,{children:["For some services, the ",(0,r.jsx)(t.code,{children:"CSRF"})," token is not required even for non-",(0,r.jsx)(t.code,{children:"GET"})," requests.\nTherefore, skipping to fetch the ",(0,r.jsx)(t.code,{children:"CSRF"})," token makes sense as a performance improvement.\nYou can disable the ",(0,r.jsx)(t.code,{children:"CSRF"})," token request by using the ",(0,r.jsx)(t.code,{children:"skipCsrfTokenFetching()"})," method like below:"]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},99329:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"features/odata/execute-request","title":"Executing a Request Using a Generated OData v2/v4 Client","description":"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.","source":"@site/docs-js/features/odata/execute-odata-request.mdx","sourceDirName":"features/odata","slug":"/features/odata/execute-request","permalink":"/cloud-sdk/docs/js/features/odata/execute-request","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/execute-odata-request.mdx","tags":[],"version":"current","frontMatter":{"id":"execute-request","title":"Executing a Request Using a Generated OData v2/v4 Client","sidebar_label":"Execute an OData request","description":"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.","keywords":["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},"sidebar":"docsJsSidebar","previous":{"title":"Generate an OData Client","permalink":"/cloud-sdk/docs/js/features/odata/generate-client"},"next":{"title":"OData v2 Client API","permalink":"/cloud-sdk/docs/js/features/odata/v2-client"}}');var r=s(74848),i=s(28453),a=(s(29030),s(65537)),o=s(79329),d=s(19419);const c={id:"execute-request",title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},l=void 0,u={},h=[{value:"General Request Structure",id:"general-request-structure",level:2},{value:"Conversion of OData Types",id:"conversion-of-odata-types",level:3},{value:"Setting Custom Request Headers",id:"setting-custom-request-headers",level:3},{value:"Setting Custom Query Parameters",id:"setting-custom-query-parameters",level:3},{value:"Setting a Custom Service Path",id:"setting-a-custom-service-path",level:3},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",level:3},{value:"Appending Paths to the Request URL Built by the Request Builders",id:"appending-paths-to-the-request-url-built-by-the-request-builders",level:3},{value:"Setting Middlewares",id:"setting-middlewares",level:3},{value:"Getting the Raw Response and the Original Request",id:"getting-the-raw-response-and-the-original-request",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Deserialize Nested Navigation Properties",id:"deserialize-nested-navigation-properties",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Once you have generated a typed OData client using the SAP Cloud SDK generator, you can use this OData client to execute HTTP requests for your service.\nThe client provides request builders for the different types of requests and abstractions of the entity sets of the given service."}),"\n",(0,r.jsx)(t.h2,{id:"general-request-structure",children:"General Request Structure"}),"\n",(0,r.jsx)(t.p,{children:"On an abstract level, creating a request using the fluent API always follows the same simple structure:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { myEntityService } from './outputDir/my-service';\n\nconst { myEntityApi } = myEntityService();\nreturn myEntityApi.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you are using an OData client, that you generated on your own, import the service function, e.g. ",(0,r.jsx)(t.code,{children:"myEntityService"}),", from the generated service directory (",(0,r.jsx)(t.code,{children:"my-service"}),") within the specified output directory (",(0,r.jsx)(t.code,{children:"outputDir"}),").\nThe name of the service directory corresponds to the ",(0,r.jsx)(t.code,{children:"directoryName"})," specified in the options per service file (",(0,r.jsx)(t.code,{children:"options-per-service.json"})," by default)."]}),"\n",(0,r.jsxs)(t.p,{children:["Destructure the service to get the API of the entity you want to make requests for - ",(0,r.jsx)(t.code,{children:"myEntityApi"})," in the example above."]}),"\n",(0,r.jsxs)(t.p,{children:["Every entity API has a ",(0,r.jsx)(t.code,{children:"requestBuilder()"})," method, that allows to chain all types of request builders that are available for this entity, e.g. ",(0,r.jsx)(t.code,{children:"myEntityApi.requestBuilder().getAll()"})," for the ",(0,r.jsx)(t.code,{children:"getAll"})," request type."]}),"\n",(0,r.jsxs)(t.p,{children:["See the list below for details on all available request types (denoted by ",(0,r.jsx)(t.code,{children:"requestType"})," in the example above):"]}),"\n",(0,r.jsxs)(a.A,{groupId:"odataVersion",defaultValue:"v2",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],children:[(0,r.jsxs)(o.A,{value:"v2",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v2-client#getall-request-builder",children:(0,r.jsx)("code",{children:"getAll"})})," ",(0,r.jsx)(t.p,{children:"Build requests to get a list of entities (OData v2)"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v2-client#getbykey-request-builder",children:(0,r.jsx)("code",{children:"getByKey"})})," ",(0,r.jsx)(t.p,{children:"Build requests to get an entity based on a key (OData v2)"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v2-client#create-request-builder",children:(0,r.jsx)("code",{children:"create"})})," ",(0,r.jsx)(t.p,{children:"Build requests to create entities (OData v2)"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v2-client#update-request-builder",children:(0,r.jsx)("code",{children:"update"})})," ",(0,r.jsx)(t.p,{children:"Build requests to update entities (OData v2)"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v2-client#delete-request-builder",children:(0,r.jsx)("code",{children:"delete"})})," ",(0,r.jsx)(t.p,{children:"Build requests to delete entities (OData v2)"})]})]}),(0,r.jsxs)(o.A,{value:"v4",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v4-client#getall-request-builder",children:(0,r.jsx)("code",{children:"getAll"})})," ",(0,r.jsx)(t.p,{children:"Build requests to get a list of entities (OData v4)"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v4-client#getbykey-request-builder",children:(0,r.jsx)("code",{children:"getByKey"})})," ",(0,r.jsx)(t.p,{children:"Build requests to get an entity based on a key (OData v4)"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v4-client#create-request-builder",children:(0,r.jsx)("code",{children:"create"})})," ",(0,r.jsx)(t.p,{children:"Build requests to create entities (OData v4)"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v4-client#update-request-builder",children:(0,r.jsx)("code",{children:"update"})})," ",(0,r.jsx)(t.p,{children:"Build requests to update entities (OData v4)"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"./v4-client#delete-request-builder",children:(0,r.jsx)("code",{children:"delete"})})," ",(0,r.jsx)(t.p,{children:"Build requests to delete entities (OData v4)"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Some entities do not support all the request types, which in turn won't be available through the API."})}),"\n",(0,r.jsxs)(t.p,{children:["The request can further be configured by chaining additional configuration functions (denoted by ",(0,r.jsx)(t.code,{children:"additionalRequestConfiguration"})," in the example above).\nAll requests can be configured by setting ",(0,r.jsx)(t.a,{href:"#setting-custom-request-headers",children:"custom request headers"}),", ",(0,r.jsx)(t.a,{href:"#setting-custom-query-parameters",children:"custom query parameters"})," and a ",(0,r.jsx)(t.a,{href:"#setting-a-custom-service-path",children:"custom service path"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Each request type has additional request specific configuration options, e.g. creating an entity ",(0,r.jsx)(t.code,{children:"asChildOf"})," another entity for create requests, ETag handling for update and delete requests, as well as set operations for ",(0,r.jsx)(t.code,{children:"getAll"})," requests and selecting properties for ",(0,r.jsx)(t.code,{children:"getAll"})," and ",(0,r.jsx)(t.code,{children:"getByKey"})," requests."]}),"\n",(0,r.jsxs)(t.p,{children:["The last step when making a request using the SAP Cloud SDK is the request execution.\nOnce the request is configured use the ",(0,r.jsx)(t.code,{children:"execute()"})," method and pass a ",(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/features/connectivity/destinations",children:"destination"})," to it.\nThis will automatically construct your request URL and headers, execute the request, and return a typed response if applicable."]}),"\n",(0,r.jsx)(t.h3,{id:"conversion-of-odata-types",children:"Conversion of OData Types"}),"\n",(0,r.jsxs)(t.p,{children:["OData uses the Entity Data Model (EDM) to represent values such as strings, numbers, dates, and times.\nCalling the ",(0,r.jsx)(t.code,{children:"execute()"})," method by default automatically converts OData Entity Data Model (EDM) values to their respective types in JavaScript and TypeScript."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, the SAP Cloud SDK converts EDM types into TypeScript types as described by the following tables.\nThis can be changed by providing custom serializers and deserializers as described ",(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/features/odata/v2-client#customize-de-serialization",children:"here for OData v2"})," and ",(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/features/odata/v4-client#customize-de-serialization",children:"here for OData v4"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For definition of the EDM data types in OData, see ",(0,r.jsx)(t.a,{href:"https://www.odata.org/documentation/odata-version-2-0/json-format/",children:"the v2 spec"})," or the ",(0,r.jsx)(t.a,{href:"http://docs.oasis-open.org/odata/odata/v4.0/os/part3-csdl/odata-v4.0-os-part3-csdl.html#_The_edm:Documentation_Element",children:"v4 spec"})," of OData."]}),"\n",(0,r.jsx)(t.p,{children:"The following table describes how types are mapped by default:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"EDM Type"}),(0,r.jsx)(t.th,{children:"TypeScript Type"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.String"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Boolean"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Guid"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Decimal"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"BigNumber"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Int16"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Int32"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Int64"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"BigNumber"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Single"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Double"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Float"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{children:"Not an actual edm type, implemented for compatibility"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Byte"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.SByte"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.DateTimeOffset"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"moment.Moment"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Binary"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.DateTime"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"moment.Moment"})}),(0,r.jsx)(t.td,{children:"OData v2 only, precision limited to milliseconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Time"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"pathname:///api/v3/interfaces/sap_cloud_sdk_odata_common.Time.html",children:(0,r.jsx)(t.code,{children:"Time"})})}),(0,r.jsx)(t.td,{children:"OData v2 only, does not consider time zones"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Date"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"moment.Moment"})}),(0,r.jsx)(t.td,{children:"OData v4 only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.Duration"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"moment.Duration"})}),(0,r.jsx)(t.td,{children:"OData v4 only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Edm.TimeOfDay"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"pathname:///api/v3/interfaces/sap_cloud_sdk_odata_common.Time.html",children:(0,r.jsx)(t.code,{children:"Time"})})}),(0,r.jsx)(t.td,{children:"OData v4 only, does not consider time-zones"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Any other type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"any"})}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["If you require the raw OData response, you can look into ",(0,r.jsx)(t.a,{href:"#getting-the-raw-response-and-the-original-request",children:"getting the raw response and the original request"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"setting-custom-request-headers",children:"Setting Custom Request Headers"}),"\n",(0,r.jsxs)(t.p,{children:["The SAP Cloud SDK automatically sets some necessary request headers on every request.\nYou can specify additional custom headers using the ",(0,r.jsx)(t.code,{children:"addCustomHeaders()"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().addCustomHeaders({\n  apikey: 'my-api-key'\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The keys and values of the passed object correspond with the header names and values.\nCustom headers take priority over automatically generated headers.\nAutomatically generated headers are sent with lowercase header names, and custom headers keep the case they were set in.\nSAP Business Accelerator Hub sandbox requires a custom header called ",(0,r.jsx)(t.code,{children:"apikey"}),".\nThe example above shows how to add this header."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Setting an ",(0,r.jsx)(t.code,{children:"authorization"})," or ",(0,r.jsx)(t.code,{children:"apikey"})," header (regardless of lowercase or uppercase spelling) will skip any automatic authorization header building that the SAP Cloud SDK would normally do."]})}),"\n",(0,r.jsx)(t.h3,{id:"setting-custom-query-parameters",children:"Setting Custom Query Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["The SAP Cloud SDK adds necessary query parameters for a request based on your configuration.\nYou can add custom parameters by using the ",(0,r.jsx)(t.code,{children:"withCustomQueryParameters()"})," method.\nCustom query parameters take precedence over those created by the SAP Cloud SDK."]}),"\n",(0,r.jsxs)(t.p,{children:["In the example below an additional query parameter ",(0,r.jsx)(t.code,{children:"language=en"})," will be added to the request URL:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().withCustomQueryParameters({\n  language: 'en'\n});\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you want to set a query parameter in quotes (e.g. ",(0,r.jsx)(t.code,{children:"language='en'"}),") you will have to provide the parameter with quotes, e.g. ",(0,r.jsx)(t.code,{children:"{ language: \"'en'\" }"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"setting-a-custom-service-path",children:"Setting a Custom Service Path"}),"\n",(0,r.jsxs)(t.p,{children:["If a service specification contains a specification for the ",(0,r.jsx)(t.code,{children:"basePath"}),", the SAP Cloud SDK generator generates an OData client with a default service path according to the specification (typically ",(0,r.jsx)(t.code,{children:"'/sap/opu/odata/sap/'"})," for SAP S/4HANA services).\nWhen there is no such path defined in the specification, it can be manually set in the ",(0,r.jsx)(t.code,{children:"options-per-service.json"}),".\nIt can also be adjusted per request by using the ",(0,r.jsx)(t.code,{children:"setBasePath()"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().setBasePath('my/custom/service/path');\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This will change the base path of the request.\nExecuting the example request above against a destination with the URL ",(0,r.jsx)(t.code,{children:"https://my.s4-system.com"})," will result in a request against the target like this: ",(0,r.jsx)(t.code,{children:"https://my.s4-system.com/my/custom/service/path/MyEntity"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"setting-a-custom-request-configuration",children:"Setting a Custom Request Configuration"}),"\n",(0,r.jsx)(d.Fg,{}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n"})}),"\n",(0,r.jsx)(d.V6,{}),"\n",(0,r.jsx)(t.h3,{id:"appending-paths-to-the-request-url-built-by-the-request-builders",children:"Appending Paths to the Request URL Built by the Request Builders"}),"\n",(0,r.jsxs)(t.p,{children:["Usually, the request builders construct the request URL for you automatically.\nHowever, for certain OData features like navigation properties, the SAP Cloud SDK does not provide a type-safe API that constructs the request path in a fully automated manner.\nFor that reason, there is a non-typed API to request builders providing the capability to append additional path segments to the request URL.\nYou have to use the ",(0,r.jsx)(t.code,{children:"executeRaw(destination)"})," method to get results because the SAP Cloud SDK can't deserialize these responses in a type-safe way."]}),"\n",(0,r.jsx)(t.p,{children:"The example below shows how to query a navigation property from a given entity."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getByKey('123')\n  .appendPath(\n    '/to_SingleValueNavigationProperty1',\n    '/to_SingleValueNavigationProperty2'\n  )\n  .executeRaw(destination);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["It will build the request URL like below:\n",(0,r.jsx)(t.code,{children:"https://my.s4-system.com/service-path/MyEntity(key='123')/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2"}),"\nwhere:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2"})," is the additional path that you provide from the parameters."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"https://my.s4-system.com/service-path/MyEntity(key='123')"})," is the path of the original request URL built by the SAP Cloud SDK."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"setting-middlewares",children:"Setting Middlewares"}),"\n",(0,r.jsxs)(t.p,{children:["You can specify middlewares for a request via the ",(0,r.jsx)(t.code,{children:"middleware()"})," method on the request builder:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { myEntityApi } = myEntityService();\nconst httpResponse: HttpResponse = myEntityApi\n  .requestBuilder()\n  .getAll()\n  .middleware(myMiddlewares)\n  .execute(destination);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The method accepts variable number of single elements as well as arrays.\nMiddleware is a general concept used to add ",(0,r.jsx)(t.a,{href:"../middleware",children:"arbitrary enhancements to the request"}),".\nA typical use case is to also add ",(0,r.jsx)(t.a,{href:"../../guides/resilience",children:"resilience"})," to requests."]}),"\n",(0,r.jsx)(t.h3,{id:"getting-the-raw-response-and-the-original-request",children:"Getting the Raw Response and the Original Request"}),"\n",(0,r.jsx)(d.Ld,{}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { myEntityApi } = myEntityService();\nconst httpResponse: HttpResponse = myEntityApi\n  .requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n"})}),"\n",(0,r.jsx)(d.Wf,{}),"\n",(0,r.jsx)("ul",{style:{"margin-top":"-16px"},children:(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["In rare cases, when the response data cannot be deserialized.\nThis can happen when function imports use an entity type as a return type, and this entity type is shared by multiple ",(0,r.jsx)(t.code,{children:"EntitySet"})," instances.\nWithout further information, it is unclear which ",(0,r.jsx)("code",{children:"Entity"})," should be deserialized.\nFor those cases, you have to use ",(0,r.jsx)("code",{children:"executeRaw()"})," and use the ",(0,r.jsx)("code",{children:"deserialize()"})," function on the response data."]})})}),"\n",(0,r.jsx)(t.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.h4,{id:"deserialize-nested-navigation-properties",children:"Deserialize Nested Navigation Properties"}),"\n",(0,r.jsxs)(t.p,{children:["When deserializing an OData response that contains nested navigation properties, a user reported an ",(0,r.jsx)(t.a,{href:"https://github.com/SAP/cloud-sdk-js/issues/2606",children:"issue"})," about some missing navigation properties.\nThis might happen if you don't use the object destructuring for getting multiple APIs.\nWhat you should do:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n"})}),"\n",(0,r.jsx)(t.p,{children:"What you should avoid:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const businessPartnerApi = businessPartnerService().businessPartnerApi;\nconst businessPartnerAddressApi =\n  businessPartnerService().businessPartnerAddressApi;\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19419:(e,t,s)=>{s.d(t,{Fg:()=>l,Ld:()=>h,V6:()=>u,W4:()=>m,Wf:()=>p,fC:()=>x});s(96540);var n=s(14383),r=s(96336),i=s(87862),a=s(59979),o=s(28501),d=s(76420),c=s(74848);function l(){return(0,c.jsx)(n.default,{})}function u(){return(0,c.jsx)(r.default,{})}function h(){return(0,c.jsx)(i.default,{})}function p(){return(0,c.jsx)(a.default,{})}function m(){return(0,c.jsx)(o.default,{})}function x(){return(0,c.jsx)(d.default,{})}},79329:(e,t,s)=>{s.d(t,{A:()=>a});s(96540);var n=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:t,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:s,children:t})}},65537:(e,t,s)=>{s.d(t,{A:()=>q});var n=s(96540),r=s(34164),i=s(65627),a=s(56347),o=s(50372),d=s(30604),c=s(11861),l=s(78749);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,d.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function x(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,i=h(e),[a,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:s,groupId:r}),[x,j]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,l.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&d(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=s(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=s(74848);function g(e){let{className:t,block:s,selectedValue:n,selectValue:a,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),l=e=>{const t=e.currentTarget,s=d.indexOf(t),r=o[s].value;r!==n&&(c(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;t=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;t=d[s]??d[d.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{d.push(e)},onKeyDown:u,onClick:l,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function b(e){const t=x(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,y.jsx)(g,{...t,...e}),(0,y.jsx)(v,{...t,...e})]})}function q(e){const t=(0,j.A)();return(0,y.jsx)(b,{...e,children:u(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);