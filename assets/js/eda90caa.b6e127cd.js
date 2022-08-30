"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},a=void 0,s={unversionedId:"features/eslint-configuration",id:"version-v1/features/eslint-configuration",title:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",source:"@site/docs-js_versioned_docs/version-v1/features/eslint-configuration.mdx",sourceDirName:"features",slug:"/features/eslint-configuration",permalink:"/cloud-sdk/docs/js/v1/features/eslint-configuration",draft:!1,tags:[],version:"v1",frontMatter:{title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},sidebar:"docsJsSidebar",previous:{title:"Logging",permalink:"/cloud-sdk/docs/js/v1/features/logging"},next:{title:"Migrate to Kubernetes",permalink:"/cloud-sdk/docs/js/v1/guides/migrate-sdk-application-from-btp-cf-to-kubernetes"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The SAP Cloud SDK provides a configuration with our recommended ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," rules and plugin.\nIt extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint:recommended")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/recommended")," configurations.\nIt also uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-config-prettier")," to avoid any formatting conflicts when using the highly recommended ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),"."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/eslint-config")," package in your project.\nTo add the configuration please adjust your ESLint configuration (usually called ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.js"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "extends": "@sap-cloud-sdk"\n}\n')),(0,i.kt)("p",null,"or if you want to combine this configuration with others:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "extends": ["example-config", "@sap-cloud-sdk"]\n}\n')),(0,i.kt)("p",null,"This configuration depends on plugins ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-unused-imports"),", which need to be installed in your project."),(0,i.kt)("p",null,"ESLint merges these shareable configurations with your configuration.\nAny rule configured in your ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," will overwrite the setting for this rule in the shareable configuration."))}p.isMDXComponent=!0}}]);