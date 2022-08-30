"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=i(n),m=s,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:s,o[1]=c;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},41974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(87462),s=(n(67294),n(3905));const a={},o=void 0,c={unversionedId:"features/odata/common/batch/combining-requests",id:"features/odata/common/batch/combining-requests",title:"combining-requests",description:"You can combine requests within a batch request as you like.",source:"@site/docs-js/features/odata/common/batch/combining-requests.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/combining-requests",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/combining-requests",draft:!1,tags:[],version:"current",frontMatter:{}},u={},i=[],d={toc:i};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can combine requests within a ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request as you like.\nIn the example below, we combine create requests, update requests, and get requests into one ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request.\nRemember, that change requests have to be wrapped in a ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset"),".\nWe put the create requests into one changeset and combine the update and delete requests into another.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")," requests are added to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request directly without wrapping."),(0,s.kt)("p",null,"Once the batch request is executed the response will be an array of sub-responses to the specific changeset and retrieve requests in the order that was given in the request.\nNote, that the sub-responses of a ",(0,s.kt)("a",{parentName:"p",href:"#changeset"},"changeset")," don't have to be in order."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async function executeComplexBatch(\n  createAddressRequests: CreateRequestBuilder<BusinessPartnerAddress>[],\n  updateAddressRequests: UpdateRequestBuilder<BusinessPartnerAddress>[],\n  deleteAddressRequests: DeleteRequestBuilder<BusinessPartnerAddress>[],\n  getAddressByIdRequests: GetByKeyRequestBuilder<BusinessPartnerAddress>[]\n) {\n  // Execute batch request\n  const [\n    createAddressesResponse,\n    updateAndDeleteAddressesResponse,\n    ...getAddressesByIdResponses\n  ] = await batch(\n    changeset(...createAddressRequests),\n    changeset(...updateAddressRequests, ...deleteAddressRequests),\n    ...getAddressByIdRequests\n  ).execute(destination);\n\n  // Do something with responses\n}\n")))}p.isMDXComponent=!0}}]);