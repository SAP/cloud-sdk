"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={},o=void 0,i={unversionedId:"features/odata/common/batch/retrieve-request",id:"features/odata/common/batch/retrieve-request",title:"retrieve-request",description:"A retrieve request represents an HTTP GET request.",source:"@site/docs-js/features/odata/common/batch/retrieve-request.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/retrieve-request",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/retrieve-request",draft:!1,tags:[],version:"current",frontMatter:{}},u={},c=[],p={toc:c};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A retrieve request represents an HTTP ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request.\nIn terms of the SAP Cloud SDK this includes all requests built by ",(0,a.kt)("a",{parentName:"p",href:"#getall-request-builder"},(0,a.kt)("inlineCode",{parentName:"a"},"GetAllRequestBuilder"))," and ",(0,a.kt)("a",{parentName:"p",href:"#getbykey-request-builder"},(0,a.kt)("inlineCode",{parentName:"a"},"GetByKeyRequestBuilder")),"."),(0,a.kt)("p",null,"You can pass retrieve requests directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," function.\nOnce you execute a ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request you get a list of ",(0,a.kt)("a",{parentName:"p",href:"#responses"},(0,a.kt)("inlineCode",{parentName:"a"},"BatchResponse")),".\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse")," that corresponds with a retrieve request can either be a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"."),(0,a.kt)("p",null,"In the example below, we map each given address ID to a ",(0,a.kt)("a",{parentName:"p",href:"#getbykey-request-builder"},(0,a.kt)("inlineCode",{parentName:"a"},"GetByKeyRequestBuilder")),".\nThese retrieve requests are combined into one ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request and executed against a destination."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi } = businessPartnerService();\n\nasync function getAddressesByIds(\n  businessPartnerId: string,\n  addressIds: string[]\n): Promise<BusinessPartnerAddress[]> {\n  const retrieveRequests = addressIds.map(addressId =>\n    // Create get by key request\n    businessPartnerAddressApi\n      .requestBuilder()\n      .getByKey(businessPartnerId, addressId)\n  );\n\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // ...\n}\n")))}l.isMDXComponent=!0}}]);