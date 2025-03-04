"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[54001],{50694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/common/entity/deserialize-entity","title":"deserialize-entity","description":"In some cases you might retrieve raw data from an OData response.","source":"@site/docs-js/features/odata/common/entity/deserialize-entity.mdx","sourceDirName":"features/odata/common/entity","slug":"/features/odata/common/entity/deserialize-entity","permalink":"/cloud-sdk/docs/js/features/odata/common/entity/deserialize-entity","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/entity/deserialize-entity.mdx","tags":[],"version":"current","frontMatter":{}}');var i=n(74848),o=n(28453);const a={},r=void 0,d={},c=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In some cases you might retrieve raw data from an OData response.\nIf you need to transform it to an SAP Cloud SDK representation of an entity, you can deserialize it using the ",(0,i.jsx)(t.code,{children:"deserializeEntity()"})," method.\nFields unknown according to the specification are added as custom fields, without deserializing the according value.\nNote that this function is not part of a specific service and has to be imported from the SAP Cloud SDK ",(0,i.jsx)(t.code,{children:"odata-v2"})," or ",(0,i.jsx)(t.code,{children:"odata-v4"})," package."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n  defaultDeSerializers,\n  entityDeserializer\n} from '@sap-cloud-sdk/odata-v2';\nimport { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi } = businessPartnerService();\nconst originalEntity = {\n  FirstName: 'Peter',\n  LastName: 'Pan',\n  to_BusinessPartnerAddress: [\n    {\n      Country: 'Neverland'\n    }\n  ]\n};\n\nconst deserializedEntity = entityDeserializer(\n  defaultDeSerializers\n).deserializeEntity(originalEntity, businessPartnerApi);\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);