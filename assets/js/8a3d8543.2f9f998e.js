"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"release-policy",title:"Release Policy",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},o=void 0,i={unversionedId:"release-policy",id:"release-policy",title:"Release Policy",description:"The SAP Cloud SDK follows semantic versioning.",source:"@site/docs-js/release-policy.mdx",sourceDirName:".",slug:"/release-policy",permalink:"/cloud-sdk/docs/js/release-policy",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/release-policy.mdx",tags:[],version:"current",frontMatter:{id:"release-policy",title:"Release Policy",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},sidebar:"docsJsSidebar",previous:{title:"Multi-Tenant Application",permalink:"/cloud-sdk/docs/js/tutorials/multi-tenant-application"},next:{title:"SAP Cloud SDK & CAP",permalink:"/cloud-sdk/docs/js/video/calm"}},s={},p=[{value:"Planned Major Release Schedule",id:"planned-major-release-schedule",level:2},{value:"Upgrading to a New Major Version",id:"upgrading-to-a-new-major-version",level:3},{value:"Fixes and Maintenance",id:"fixes-and-maintenance",level:3},{value:"Minor Release Policy",id:"minor-release-policy",level:2},{value:"Upgrading to a New Minor Version",id:"upgrading-to-a-new-minor-version",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The SAP Cloud SDK follows ",(0,n.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),"."),(0,n.kt)("h2",{id:"planned-major-release-schedule"},"Planned Major Release Schedule"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Release Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"March 2019")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"February 2022")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3.x"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://blogs.sap.com/2023/03/02/sap-cloud-sdk-version-3/"},"Released GA")),(0,n.kt)("td",{parentName:"tr",align:"left"},"February 2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Planned"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Q1/Q2 2024")))),(0,n.kt)("h3",{id:"upgrading-to-a-new-major-version"},"Upgrading to a New Major Version"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We provide a step-by-step upgrade guide for each major version."),(0,n.kt)("li",{parentName:"ul"},"Following the upgrade steps should take less than a day of development effort regardless of the project size.")),(0,n.kt)("h3",{id:"fixes-and-maintenance"},"Fixes and Maintenance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We provide new features and fixes only for the ",(0,n.kt)("strong",{parentName:"li"},"latest major release")," of the SAP Cloud SDK for JavaScript.")),(0,n.kt)("h2",{id:"minor-release-policy"},"Minor Release Policy"),(0,n.kt)("p",null,"We release a new ",(0,n.kt)("strong",{parentName:"p"},"minor version")," every 2 weeks, assuming new functionality or fixes are available."),(0,n.kt)("h3",{id:"upgrading-to-a-new-minor-version"},"Upgrading to a New Minor Version"),(0,n.kt)("p",null,"Upgrading to a new ",(0,n.kt)("strong",{parentName:"p"},"minor release version")," should not involve any effort because we do not introduce breaking changes."),(0,n.kt)("admonition",{title:"TypeScript version bumps",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We regularly upgrade TypeScript to the latest stable version.\nIn rare cases this can lead to compilation errors for projects using TypeScript.\nThe solution is usually upgrading TypeScript to the latest stable version.")))}c.isMDXComponent=!0}}]);