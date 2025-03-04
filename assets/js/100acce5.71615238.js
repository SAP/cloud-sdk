"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[86773],{49948:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"features/odata/common/batch/configure-serialization","title":"configure-serialization","description":"By default, URLs in the multipart representation of a request are serialized to a path relative to the service, e.g.:","source":"@site/docs-js/features/odata/common/batch/configure-serialization.mdx","sourceDirName":"features/odata/common/batch","slug":"/features/odata/common/batch/configure-serialization","permalink":"/cloud-sdk/docs/js/features/odata/common/batch/configure-serialization","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/batch/configure-serialization.mdx","tags":[],"version":"current","frontMatter":{}}');var i=s(74848),a=s(28453);const r={},o=void 0,c={},l=[];function d(e){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"By default, URLs in the multipart representation of a request are serialized to a path relative to the service, e.g.:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"GET /sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress HTTP/1.1\n"})}),"\n",(0,i.jsx)(t.p,{children:"However, some services might only understand URLs relative to the entity or even absolute URLs."}),"\n",(0,i.jsxs)(t.p,{children:["To configure the serialization of the URLs within a batch request, you can set the subrequest path type using the ",(0,i.jsx)(t.code,{children:"withSubRequestPathType()"})," method.\nYou can choose from the following options:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"relativeToService"})," (default), which yields URLs relative to the service"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"relativeToEntity"}),", which yields URLs relative to the entity"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"absolute"}),", which produces absolute URLs"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"noPath"}),", which only returns the entity with no preceding path"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"See below for examples:"}),"\n",(0,i.jsx)(t.p,{children:"Serialize subrequest path relative to entity:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// GET /A_BusinessPartnerAddress HTTP/1.1\nbatch(...requests).withSubRequestPathType('relativeToEntity');\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Serialize subrequest without a preceding path (like ",(0,i.jsx)(t.code,{children:"relativetoEntity"})," without a leading slash):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// GET A_BusinessPartnerAddress HTTP/1.1\nbatch(...requests).withSubRequestPathType('noPath');\n"})}),"\n",(0,i.jsx)(t.p,{children:"Serialize subrequest path as absolute URL:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// GET https://my-s4.system.com/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress HTTP/1.1\nbatch(...requests).withSubRequestPathType('absolute');\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);