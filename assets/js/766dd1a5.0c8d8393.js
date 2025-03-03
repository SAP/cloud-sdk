"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[29125],{97003:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"features/odata/common/operation-imports/data-accessor","title":"data-accessor","description":"If the response structure does not match the transformation type, the promise from execute(destination) will be resolved into undefined.","source":"@site/docs-js/features/odata/common/operation-imports/data-accessor.mdx","sourceDirName":"features/odata/common/operation-imports","slug":"/features/odata/common/operation-imports/data-accessor","permalink":"/cloud-sdk/docs/js/v4/features/odata/common/operation-imports/data-accessor","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/operation-imports/data-accessor.mdx","tags":[],"version":"current","frontMatter":{}}');var s=o(74848),r=o(28453);const a={},c=void 0,d={},i=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["If the response structure does not match the transformation type, the promise from ",(0,s.jsx)(t.code,{children:"execute(destination)"})," will be resolved into ",(0,s.jsx)(t.code,{children:"undefined"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The default transformer expects the following response format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "d": {\n    "Count": 0\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Assume the actual response has an additional layer ",(0,s.jsx)(t.code,{children:"Foo"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "d": {\n    "Foo": {\n      "Count": 0\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In this case, ",(0,s.jsx)(t.code,{children:"dataAccessor"})," can be used in the following way to modify the response into the desired form for further deserialization."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"operationRequestBuilder.execute(destination, data => data.d.Foo);\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>c});var n=o(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);