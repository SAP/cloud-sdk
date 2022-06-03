"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9590],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,u=new Array(s);u[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<s;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),s="tabItem_OmH5";function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,u),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),s=n(72389),u=n(67392),o=n(7094),i=n(12466),l=n(86010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,n,s,p=e.lazy,m=e.block,f=e.defaultValue,b=e.values,v=e.groupId,y=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,u.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var q=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=h[0])?void 0:s.props.value;if(null!==q&&!g.some((function(e){return e.value===q})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+q+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),T=N.tabGroupChoices,w=N.setTabGroupChoices,O=(0,a.useState)(q),P=O[0],E=O[1],I=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=T[v];null!=x&&x!==P&&g.some((function(e){return e.value===x}))&&E(x)}var C=function(e){var t=e.currentTarget,n=I.indexOf(t),r=g[n].value;r!==P&&(j(t),E(r),null!=v&&w(v,r))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;n=I[a]||I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},g.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:C,onClick:C},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},79862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),u=n(9877),o=n(72360),i=["components"],l={},c=void 0,d={unversionedId:"js/features/odata/common/batch/retrieve-request",id:"js/features/odata/common/batch/retrieve-request",title:"retrieve-request",description:"A retrieve request represents an HTTP GET request.",source:"@site/docs/js/features/odata/common/batch/retrieve-request.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/retrieve-request",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/retrieve-request",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/retrieve-request.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1654266644,formattedLastUpdatedAt:"6/3/2022",frontMatter:{}},p={},m=[],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A retrieve request represents an HTTP ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")," request.\nIn terms of the SAP Cloud SDK this includes all requests built by ",(0,s.kt)("a",{parentName:"p",href:"#getall-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"GetAllRequestBuilder"),"s")," and ",(0,s.kt)("a",{parentName:"p",href:"#getbykey-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"GetByKeyRequestBuilder"),"s"),"."),(0,s.kt)("p",null,"You can pass retrieve requests directly to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," function.\nOnce you execute a ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request you get a list of ",(0,s.kt)("a",{parentName:"p",href:"#responses"},(0,s.kt)("inlineCode",{parentName:"a"},"BatchResponse"),"s"),".\nA ",(0,s.kt)("inlineCode",{parentName:"p"},"BatchResponse")," that corresponds with a retrieve request can either be a ",(0,s.kt)("inlineCode",{parentName:"p"},"ReadResponse")," or an ",(0,s.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"."),(0,s.kt)("p",null,"In the example below, we map each given address ID to a ",(0,s.kt)("a",{parentName:"p",href:"#getbykey-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"GetByKeyRequestBuilder")),".\nThese retrieve requests are combined into one ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request and executed against a destination."),(0,s.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"major",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi } = businessPartnerService();\n\nasync function getAddressesByIds(\n  businessPartnerId: string,\n  addressIds: string[]\n): Promise<BusinessPartnerAddress[]> {\n  const retrieveRequests = addressIds.map(addressId =>\n    // Create get by key request\n    businessPartnerAddressApi\n      .requestBuilder()\n      .getByKey(businessPartnerId, addressId)\n  );\n\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // ...\n}\n"))),(0,s.kt)(o.Z,{value:"deprecated",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async function getAddressesByIds(\n  businessPartnerId: string,\n  addressIds: string[]\n): Promise<BusinessPartnerAddress[]> {\n  const retrieveRequests = addressIds.map(addressId =>\n    // Create get by key request\n    BusinessPartnerAddress.requestBuilder().getByKey(\n      businessPartnerId,\n      addressId\n    )\n  );\n\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // ...\n}\n")))))}b.isMDXComponent=!0}}]);