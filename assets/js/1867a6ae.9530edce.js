"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[99662],{50405:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"guides/api-business-hub-download-specification","title":"Download Specification Files from SAP Business Accelerator Hub","description":"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP Business Accelerator Hub.","source":"@site/docs-js/guides/apihub-download-spec.mdx","sourceDirName":"guides","slug":"/guides/api-business-hub-download-specification","permalink":"/cloud-sdk/docs/js/guides/api-business-hub-download-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/guides/apihub-download-spec.mdx","tags":[],"version":"current","frontMatter":{"id":"api-business-hub-download-specification","title":"Download Specification Files from SAP Business Accelerator Hub","sidebar_label":"Download specification files","description":"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP Business Accelerator Hub."},"sidebar":"docsJsSidebar","previous":{"title":"Remotely debug an application on SAP BTP","permalink":"/cloud-sdk/docs/js/guides/remote-debugging"},"next":{"title":"Introduction","permalink":"/cloud-sdk/docs/js/tutorials/getting-started/introduction"}}');var o=i(74848),t=i(28453),c=i(29030);const a={id:"api-business-hub-download-specification",title:"Download Specification Files from SAP Business Accelerator Hub",sidebar_label:"Download specification files",description:"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP Business Accelerator Hub."},d=void 0,l={},r=[{value:"When Do I Need A Specification File?",id:"when-do-i-need-a-specification-file",level:2},{value:"Steps To Download A Specification File",id:"steps-to-download-a-specification-file",level:2}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP Business Accelerator Hub."}),"\n",(0,o.jsx)(s.h2,{id:"when-do-i-need-a-specification-file",children:"When Do I Need A Specification File?"}),"\n",(0,o.jsx)(s.p,{children:"To consume an OData or OpenAPI service, you need to generate a corresponding client.\nThe documentation of the generator packages can be found below:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"@sap-cloud-sdk/generator"})," for generating an OData client (see ",(0,o.jsx)(s.a,{href:"/cloud-sdk/docs/js/features/odata/generate-client",children:"doc"}),")"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"@sap-cloud-sdk/openapi-generator"})," for generating an OpenAPI client (see ",(0,o.jsx)(s.a,{href:"/cloud-sdk/docs/js/features/openapi/generate-client",children:"doc"}),")"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"steps-to-download-a-specification-file",children:"Steps To Download A Specification File"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Go to ",(0,o.jsx)(s.a,{href:"https://api.sap.com",children:"SAP Business Accelerator Hub"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"login"}),", as this is necessary for downloading the specs."]}),"\n",(0,o.jsx)(s.li,{children:'Search for the service you want to consume like "business partner". The search results should look like the screenshot below.'}),"\n",(0,o.jsxs)(s.li,{children:["Apply filters for targeting a specific service by clicking the ",(0,o.jsx)(s.strong,{children:"Show Filters"})," button. For example, to filter only S/4HANA Cloud services, in the ",(0,o.jsx)(s.code,{children:"Product"})," list, select ",(0,o.jsx)(s.code,{children:"SAP S/4HANA Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:(0,c.Ay)("img/apihub-download-spec-1.png")}),"\n",(0,o.jsxs)(s.ol,{start:"5",children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Click the service name, when you find your service, so you can see a similar page like the screenshot below."}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Click ",(0,o.jsx)(s.strong,{children:"API Specification"})]}),"\n",(0,o.jsx)("img",{src:(0,c.Ay)("img/apihub-download-spec-2.png")}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Scroll down and download the EDMX file for an OData service. (For OpenAPI, choose YAML or JSON)"}),"\n",(0,o.jsx)("img",{src:(0,c.Ay)("img/apihub-download-spec-3.png")}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{title:"Try out sandbox systems",type:"tip",children:(0,o.jsxs)(s.p,{children:["If you're unsure whether the chosen service is correct, click ",(0,o.jsx)(s.strong,{children:"Try Out"})," to test the sandbox system, which exposes a few endpoints."]})})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>a});var n=i(96540);const o={},t=n.createContext(o);function c(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);