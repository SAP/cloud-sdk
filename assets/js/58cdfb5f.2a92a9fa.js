"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[67484],{73992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"features/odata/common/operations/delete","title":"delete","description":"The DeleteRequestBuilder class allows you to create DELETE requests, that delete an entity.","source":"@site/docs-js/features/odata/common/operations/delete.mdx","sourceDirName":"features/odata/common/operations","slug":"/features/odata/common/operations/delete","permalink":"/cloud-sdk/docs/js/features/odata/common/operations/delete","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/operations/delete.mdx","tags":[],"version":"current","frontMatter":{}}');var o=n(74848),r=n(28453);const a={},c=void 0,d={},i=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"DeleteRequestBuilder"})," class allows you to create ",(0,o.jsx)(t.code,{children:"DELETE"})," requests, that delete an entity."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"/*\n  The following won't work on the real SAP S/4HANA BusinessPartner service because BusinessPartners cannot be deleted.\n  This is added only for the sake of the example.\n*/\nconst { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().delete(businessPartner);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Be aware that delete requests will fail if their ETag doesn't match.\nCheck out the ",(0,o.jsx)(t.a,{href:"#handling-of-etags",children:"ETag"})," section for more information."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);