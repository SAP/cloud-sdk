"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[583],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(f,s(s({ref:n},l),{},{components:r})):t.createElement(f,s({ref:n},l))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18052:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));const o={},s=void 0,i={unversionedId:"environments/code/operator-xsuaa-service",id:"environments/code/operator-xsuaa-service",title:"operator-xsuaa-service",description:"",source:"@site/docs-js/environments/code/operator-xsuaa-service.mdx",sourceDirName:"environments/code",slug:"/environments/code/operator-xsuaa-service",permalink:"/cloud-sdk/docs/js/environments/code/operator-xsuaa-service",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/environments/code/operator-xsuaa-service.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],l={toc:p};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="operator-xsuaa-service.yml"',title:'"operator-xsuaa-service.yml"'},"apiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceInstance\nmetadata:\n  name: operator-xsuaa-service\nspec:\n  serviceOfferingName: xsuaa\n  servicePlanName: application\n  parameters:\n    xsappname: kubernetes-xsuaa\n    tenant-mode: shared\n    scopes:\n      - name: '$XSAPPNAME.Callback'\n        description: 'With this scope set, the callbacks for tenant onboarding, offboarding and getDependencies can be called.'\n        grant-as-authority-to-apps:\n          - $XSAPPNAME(application,sap-provisioning,tenant-onboarding)\n    role-templates:\n      - name: TOKEN_EXCHANGE\n        description: Token exchange\n        scope-references:\n          - uaa.user\n      - name: 'MultitenancyCallbackRoleTemplate'\n        description: 'Call callback-services of applications'\n        scope-references:\n          - '$XSAPPNAME.Callback'\n    oauth2-configuration:\n      grant-types:\n        - authorization_code\n        - client_credentials\n        - password\n        - refresh_token\n        - urn:ietf:params:oauth:grant-type:saml2-bearer\n        - user_token\n        - client_x509\n        - urn:ietf:params:oauth:grant-type:jwt-bearer\n      # Allowed redirect URIs in case you want to use an approuter behind an ingress for user login\n      redirect-uris:\n        - https://*/**\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="operator-xsuaa-binding.yml"',title:'"operator-xsuaa-binding.yml"'},"apiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceBinding\nmetadata:\n  name: operator-xsuaa-service\nspec:\n  serviceInstanceName: operator-xsuaa-service\n")))}u.isMDXComponent=!0}}]);