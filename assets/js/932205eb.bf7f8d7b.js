"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"features/odata/common/query-parameter/filter-functions",id:"version-v1/features/odata/common/query-parameter/filter-functions",title:"filter-functions",description:"There are predefined filter functions e.g. length, substring, substringOf in the core library, that allow for a wide range of filter expressions:",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/query-parameter/filter-functions.mdx",sourceDirName:"features/odata/common/query-parameter",slug:"/features/odata/common/query-parameter/filter-functions",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/query-parameter/filter-functions",draft:!1,tags:[],version:"v1",frontMatter:{}},l={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are predefined filter functions e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"length"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"substring"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"substringOf")," in the core library, that allow for a wide range of filter expressions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\nFetch all business partners who have a first name shorter than 5 letters\n*/\nBusinessPartner.requestBuilder()\n  .getAll()\n  .filter(length(BusinessPartner.FIRST_NAME).lessThan(5))\n  .execute(destination);\n")),(0,a.kt)("p",null,"For filter functions with ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," as the return type, the filter function can be used directly as a filter without ",(0,a.kt)("inlineCode",{parentName:"p"},".equal(true)"),".\nLogically, the two following examples are equivalent to each other:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  $filter=startswith(FirstName, 'Bob') eq true\n*/\n.filter(\n  startsWith(BusinessPartner.FIRST_NAME, 'Bob').equal(true)\n)\n")),(0,a.kt)("p",null,"The filter expression can be shortened:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  /*\n    $filter=startswith(FirstName, 'Bob')\n  */\n  .filter(\n    startsWith(BusinessPartner.FIRST_NAME, 'Bob')\n  )\n")),(0,a.kt)("p",null,"However, as some services might not support both versions shown above, you might have to choose one of them to fit the target system."))}p.isMDXComponent=!0}}]);