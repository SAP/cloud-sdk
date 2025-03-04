"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[20544],{31125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"features/odata/common/entity/from-json","title":"from-json","description":"Sometimes, it makes sense for you to store your data as a JSON object, that is based on the entity type.","source":"@site/docs-js/features/odata/common/entity/from-json.mdx","sourceDirName":"features/odata/common/entity","slug":"/features/odata/common/entity/from-json","permalink":"/cloud-sdk/docs/js/features/odata/common/entity/from-json","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/entity/from-json.mdx","tags":[],"version":"current","frontMatter":{}}');var o=t(74848),r=t(28453);const a={},i=void 0,c={},d=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Sometimes, it makes sense for you to store your data as a JSON object, that is based on the entity type.\nFor example, when using the property names of the entity class as properties of your object.\nIf you are looking for a way to create an entity from a JSON response, that you got from an OData service, you are probably looking for ",(0,o.jsx)(n.a,{href:"#deserialize-an-odata-json-response-to-an-entity",children:"entity deserialization"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This would be the JSON representation of a business partner in the SAP Cloud SDK:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "firstName": "Peter",\n  "lastName": "Pan",\n  "toBusinessPartnerAddress": [\n    {\n      "country": "Neverland"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can use this data to build an entity using the ",(0,o.jsx)(n.code,{children:"fromJson()"})," method.\nThe example below shows how you would create an instance of the business partner class using the ",(0,o.jsx)(n.code,{children:"fromJson()"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi } = businessPartnerService();\nconst businessPartner = businessPartnerApi.entityBuilder().fromJson({\n  firstName: 'Peter',\n  lastName: 'Pan',\n  toBusinessPartnerAddress: [\n    {\n      country: 'Neverland'\n    }\n  ]\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"If there are unknown fields present in the JSON object, they will be treated as custom fields."})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);