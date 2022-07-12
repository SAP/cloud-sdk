"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5082],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(87462),a=r(67294),o=r(86010),u=r(72389),l=r(67392),i=r(7094),s=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,u=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:y[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),O=w.tabGroupChoices,T=w.setTabGroupChoices,j=(0,a.useState)(k),E=j[0],N=j[1],x=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var D=O[b];null!=D&&D!==E&&h.some((function(e){return e.value===D}))&&N(D)}var C=function(e){var t=e.currentTarget,r=x.indexOf(t),n=h[r].value;n!==E&&(P(t),N(n),null!=b&&T(b,String(n)))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=x.indexOf(e.currentTarget)+1;r=null!=(n=x[a])?n:x[0];break;case"ArrowLeft":var o,u=x.indexOf(e.currentTarget)-1;r=null!=(o=x[u])?o:x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:Z,onFocus:C,onClick:C},u,{className:(0,o.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(y.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,u.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},40785:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),u=r(65488),l=r(85162),i=["components"],s={},c=void 0,p={unversionedId:"js/features/odata/common/operations/get-by-key",id:"js/features/odata/common/operations/get-by-key",title:"get-by-key",description:"The GetByKey request builder allows you to create a request to retrieve one entity based on its key:",source:"@site/docs/js/features/odata/common/operations/get-by-key.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/get-by-key",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/get-by-key",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/get-by-key.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1657633334,formattedLastUpdatedAt:"7/12/2022",frontMatter:{}},d={},m=[],f={toc:m};function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GetByKey")," request builder allows you to create a request to retrieve one entity based on its key:"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().getByKey('id');\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder().getByKey('id');\n")))),(0,o.kt)("p",null,"The example above retrieves the ",(0,o.kt)("inlineCode",{parentName:"p"},"BusinessPartner")," with the ID ",(0,o.kt)("inlineCode",{parentName:"p"},"'id'"),"."),(0,o.kt)("p",null,"The result can be restricted by applying the ",(0,o.kt)("a",{parentName:"p",href:"#select"},"select")," function, same as in the ",(0,o.kt)("a",{parentName:"p",href:"#getall-request-builder"},"GetAll")," request."))}b.isMDXComponent=!0}}]);