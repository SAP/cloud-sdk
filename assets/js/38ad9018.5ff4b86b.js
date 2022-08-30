"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||l[f]||a;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},s=void 0,i={unversionedId:"features/odata/common/operations/set-required-fields",id:"version-v1/features/odata/common/operations/set-required-fields",title:"set-required-fields",description:"If you want to send properties in the payload of the update request, that you did not change, use the setRequiredFields method to add them.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/operations/set-required-fields.mdx",sourceDirName:"features/odata/common/operations",slug:"/features/odata/common/operations/set-required-fields",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/operations/set-required-fields",draft:!1,tags:[],version:"v1",frontMatter:{}},u={},c=[],d={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to send properties in the payload of the update request, that you did not change, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setRequiredFields")," method to add them."),(0,o.kt)("p",null,"In the following example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," request will contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"FIRST_NAME")," property of the business partner, even if it didn't change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Get a business partner\nconst businessPartner = await BusinessPartner\n    .requestBuilder()\n    .getByKey(\'1\')\n    .execute({destinationName: \'myDestination\'});\n\n// Change last name\nbusinessPartner.lastName = \'Smith\';\n\n// Send a PATCH request with `{ "LastName" : "Smith", "FirstName": "Steve" }`  and include the first name although it was not changed\nBusinessPartner\n  .requestBuilder()\n  .update(businessPartner)\n  .setRequiredFields(BusinessPartner.FIRST_NAME);\n')))}l.isMDXComponent=!0}}]);