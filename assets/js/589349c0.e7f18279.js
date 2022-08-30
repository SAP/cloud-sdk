"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"features/odata/common/batch/serialization",id:"version-v1/features/odata/common/batch/serialization",title:"serialization",description:"By default, when you execute a batch request, the subrequests are serialized to a multipart representation of the request, which is essentially a string.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/batch/serialization.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/serialization",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/batch/serialization",draft:!1,tags:[],version:"v1",frontMatter:{}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, when you execute a batch request, the subrequests are serialized to a multipart representation of the request, which is essentially a string.\nThis is what a create request for a business partner addresses would serialize to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Content-Type: application/http\nContent-Transfer-Encoding: binary\n\nPOST /sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress HTTP/1.1\nContent-Type: application/json\nAccept: application/json\n\n{"BusinessPartner":"1","PostalCode":"10001","City":"New York","Country":"USA"}\n\n')),(0,a.kt)("p",null,'The first lines are request headers for the multipart request, followed by a blank line.\nThe next line contains the request method and URL, followed by the request headers, a blank line, and the request payload.\nEvery "atomic" request is serialized to a string of this kind, while ',(0,a.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," requests do not provide a payload."))}p.isMDXComponent=!0}}]);