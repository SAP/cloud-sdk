"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[75643],{60761:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"features/odata/common/batch/combining-requests","title":"combining-requests","description":"You can combine requests within a batch request as you like.","source":"@site/docs-js/features/odata/common/batch/combining-requests.mdx","sourceDirName":"features/odata/common/batch","slug":"/features/odata/common/batch/combining-requests","permalink":"/cloud-sdk/docs/js/features/odata/common/batch/combining-requests","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/batch/combining-requests.mdx","tags":[],"version":"current","frontMatter":{}}');var r=t(74848),o=t(28453);const a={},c=void 0,d={},u=[];function i(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["You can combine requests within a ",(0,r.jsx)(s.code,{children:"batch"})," request as you like.\nIn the example below, you combine create requests, update requests, and get requests into one ",(0,r.jsx)(s.code,{children:"batch"})," request.\nRemember, that change requests have to be wrapped in a ",(0,r.jsx)(s.code,{children:"changeset()"})," function.\nPut the create requests into one changeset and combine the update and delete requests into another.\nThe ",(0,r.jsx)(s.code,{children:"GET"})," requests are added to the ",(0,r.jsx)(s.code,{children:"batch"})," request directly without wrapping."]}),"\n",(0,r.jsxs)(s.p,{children:["Once the batch request is executed the response will be an array of sub-responses to the specific changeset and retrieve requests in the order that was given in the request.\nNote, that the sub-responses of a ",(0,r.jsx)(s.a,{href:"#changeset",children:"changeset"})," don't have to be in order."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"async function executeComplexBatch(\n  createAddressRequests: CreateRequestBuilder<BusinessPartnerAddress>[],\n  updateAddressRequests: UpdateRequestBuilder<BusinessPartnerAddress>[],\n  deleteAddressRequests: DeleteRequestBuilder<BusinessPartnerAddress>[],\n  getAddressByIdRequests: GetByKeyRequestBuilder<BusinessPartnerAddress>[]\n) {\n  // Execute batch request\n  const [\n    createAddressesResponse,\n    updateAndDeleteAddressesResponse,\n    ...getAddressesByIdResponses\n  ] = await batch(\n    changeset(...createAddressRequests),\n    changeset(...updateAddressRequests, ...deleteAddressRequests),\n    ...getAddressByIdRequests\n  ).execute(destination);\n\n  // Do something with responses\n}\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>c});var n=t(96540);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);