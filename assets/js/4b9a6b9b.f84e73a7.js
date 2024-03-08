"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2162],{30813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var s=n(74848),o=n(28453);const a={},r=void 0,i={id:"features/odata/common/operations/update",title:"update",description:"The update request builder allows you to change existing entities.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/operations/update.mdx",sourceDirName:"features/odata/common/operations",slug:"/features/odata/common/operations/update",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/operations/update",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/common/operations/update.mdx",tags:[],version:"v1",frontMatter:{}},d={},u=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The update request builder allows you to change existing entities.\nBy default, ",(0,s.jsx)(t.code,{children:"PATCH"})," is used to only update changed fields."]}),"\n",(0,s.jsx)(t.p,{children:"In the following example, we first get a business partner, change one of its values, and then send an update request."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Get a business partner\nconst businessPartner = await BusinessPartner.requestBuilder()\n  .getByKey('1')\n  .execute({ destinationName: 'myDestination' });\n\n// Change first name\nbusinessPartner.firstName = 'Steve';\n\n// Send a PATCH request with `{ \"FirstName\" : \"Steve\" }`\nBusinessPartner.requestBuilder().update(businessPartner);\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the example above we changed the first name of the given business partner.\nThe payload sent to the service with PATCH includes only the first name."}),"\n",(0,s.jsxs)(t.p,{children:["Be aware that update requests will fail if their ETags don't match.\nCheck out our ",(0,s.jsx)(t.a,{href:"#handling-of-etags",children:"ETag"})," section for more information."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(96540);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);