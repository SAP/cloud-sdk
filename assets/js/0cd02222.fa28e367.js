"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[39432],{15589:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"features/odata/v2/select","title":"select","description":"When reading entities, the API offers select( ... ) on the builders.","source":"@site/docs-js/features/odata/v2/select.mdx","sourceDirName":"features/odata/v2","slug":"/features/odata/v2/select","permalink":"/cloud-sdk/docs/js/features/odata/v2/select","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/v2/select.mdx","tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453);const i={},o=void 0,c={},d=[];function l(e){const s={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["When reading entities, the API offers ",(0,r.jsx)(s.code,{children:"select( ... )"})," on the builders.\nThrough it, the query parameters ",(0,r.jsx)(s.code,{children:"$select"})," and ",(0,r.jsx)(s.code,{children:"$expand"})," are set.\nIt restricts the response to the given selection of properties in the request."]}),"\n",(0,r.jsxs)(s.p,{children:["The properties that can be selected or expanded are represented via fields on the ",(0,r.jsx)(s.code,{children:"schema"})," property of the entity API class.\nThere will be a field for each property, e.g. the ",(0,r.jsx)(s.code,{children:"businessPartnerApi"})," has ",(0,r.jsx)(s.code,{children:"schema.FIRST_NAME"})," as a representation of a property and ",(0,r.jsx)(s.code,{children:"schema.TO_BUSINESS_PARTNER_ADDRESS"})," as a representation of a navigation property."]}),"\n",(0,r.jsxs)(s.p,{children:["A navigation property means that there is a relation between a business partner and their addresses.\nIn this case, one business partner can have multiple addresses.\nIn SAP S/4HANA, navigation properties typically start with ",(0,r.jsx)(s.code,{children:"TO_"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .select(\n    businessPartnerApi.schema.FIRST_NAME,\n    businessPartnerApi.schema.LAST_NAME,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(destination);\n"})}),"\n",(0,r.jsx)(s.p,{children:"The above translates to the following query parameters:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"$select=FirstName,LastName,to_BusinessPartnerAddress/*&$expand=to_BusinessPartnerAddress\n"})}),"\n",(0,r.jsx)(s.p,{children:"One can also select properties of the expanded navigation property:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .select(\n    businessPartnerApi.schema.FIRST_NAME,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n      businessPartnerAddressApi.schema.ADDRESS_ID,\n      businessPartnerAddressApi.schema.CITY_CODE\n    )\n  )\n  .execute(destination);\n"})}),"\n",(0,r.jsx)(s.p,{children:"The above translates to the following query parameters:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"$select=FirstName,to_BusinessPartnerAddress/AddressID,to_BusinessPartnerAddress/CityCode&$expand=to_BusinessPartnerAddress\n"})})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(96540);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);