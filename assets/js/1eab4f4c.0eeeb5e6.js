"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5117],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(v,l(l({ref:t},u),{},{components:a})):n.createElement(v,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},72360:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(86010),o="tabItem_OmH5";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),o=a(72389),l=a(67392),i=a(7094),s=a(12466),d=a(86010),u="tabList_uSqn",c="tabItem_LplD";function p(e){var t,a,o,p=e.lazy,m=e.block,v=e.defaultValue,f=e.values,h=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===v?v:null!=(t=null!=v?v:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),j=w.tabGroupChoices,x=w.setTabGroupChoices,P=(0,r.useState)(y),M=P[0],T=P[1],O=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=j[h];null!=D&&D!==M&&N.some((function(e){return e.value===D}))&&T(D)}var C=function(e){var t=e.currentTarget,a=O.indexOf(t),n=N[a].value;n!==M&&(S(t),T(n),null!=h&&x(h,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,d.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":m},k)},N.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:C,onClick:C},o,{className:(0,d.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":M===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(g.filter((function(e){return e.props.value===M}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==M})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},67549:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(9877),i=a(72360),s=["components"],d={id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},u=void 0,c={unversionedId:"java/release-policy",id:"java/release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",description:"Planned Major Releases",source:"@site/docs/java/release-policy.mdx",sourceDirName:"java",slug:"/java/release-policy",permalink:"/cloud-sdk/docs/java/release-policy",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/release-policy.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1654266644,formattedLastUpdatedAt:"6/3/2022",frontMatter:{id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},sidebar:"someSidebar",previous:{title:"Troubleshooting",permalink:"/cloud-sdk/docs/java/sdk-java-troubleshooting-frequent-problems"},next:{title:"Release Notes",permalink:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"}},p={},m=[{value:"Planned Major Releases",id:"planned-major-releases",level:2},{value:"Minor and Major Release Policy",id:"minor-and-major-release-policy",level:2},{value:"Minor release schedule",id:"minor-release-schedule",level:3},{value:"Major release schedule",id:"major-release-schedule",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Maintenance and Support",id:"maintenance-and-support",level:3},{value:"Support and feedback",id:"support-and-feedback",level:2}],v={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"planned-major-releases"},"Planned Major Releases"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Planned scope"),(0,o.kt)("th",{parentName:"tr",align:null},"Upgrade guide"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"May 2017"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Released GA"),(0,o.kt)("td",{parentName:"tr",align:"left"},"August 2019"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"4.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Planned"),(0,o.kt)("td",{parentName:"tr",align:"left"},"July 2022"),(0,o.kt)("td",{parentName:"tr",align:"left"},"TBD"),(0,o.kt)("td",{parentName:"tr",align:null},"TBD")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"5.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Planned"),(0,o.kt)("td",{parentName:"tr",align:"left"},"January 2023"),(0,o.kt)("td",{parentName:"tr",align:"left"},"TBD"),(0,o.kt)("td",{parentName:"tr",align:null},"TBD")))),(0,o.kt)("h2",{id:"minor-and-major-release-policy"},"Minor and Major Release Policy"),(0,o.kt)("p",null,"We follow ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," for our releases."),(0,o.kt)("h3",{id:"minor-release-schedule"},"Minor release schedule"),(0,o.kt)("p",null,"Our regular ",(0,o.kt)("strong",{parentName:"p"},"minor version")," release happens every ",(0,o.kt)("strong",{parentName:"p"},"two weeks"),".\nIt includes new functionality, fixes, and maintenance updates that we communicate in the ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"release notes"),"."),(0,o.kt)("p",null,"We sometimes change our release frequency to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide a patch version to the latest minor release when a critical bug fix is necessary."),(0,o.kt)("li",{parentName:"ul"},"Accommodate a longer development cycle.\nWe can extend an interval between ",(0,o.kt)("strong",{parentName:"li"},"minor version")," releases.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Upgrading between minor releases")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Usually, an upgrade between minor releases does not involve any effort.\nAll the changes are incremental and backward compatible.\nWe do not remove any deprecated code before the next major release."))),(0,o.kt)("h3",{id:"major-release-schedule"},"Major release schedule"),(0,o.kt)("p",null,"We intend to release a new ",(0,o.kt)("strong",{parentName:"p"},"major version")," every ",(0,o.kt)("strong",{parentName:"p"},"six months")," to introduce significant feature upgrades, refactor existing features, and clean up deprecated code."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Major version")," release interval is indicative and may change."),(0,o.kt)("li",{parentName:"ul"},"We will announce planned date and scope of the next ",(0,o.kt)("strong",{parentName:"li"},"major version")," release in this ",(0,o.kt)("a",{parentName:"li",href:"#planned-major-release-schedule"},"document")," and ",(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"release notes")," at least 3 months before the planned release date.")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Upgrading between major versions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Major releases include incompatible API changes.\nAn upgrade will usually involve a certain effort to make your code benefit from new APIs.\nWe intend to minimize this effort between adjacent major versions."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"We provide a step-by-step upgrade guide for each major version."),(0,o.kt)("li",{parentName:"ul"},"Following the upgrade steps should take less than a day of development effort regardless of the project size.")))),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The documentation is always up to date with the ",(0,o.kt)("strong",{parentName:"p"},"latest major release"),".\nWe provide documentation for the two most recent major versions at the same time.\nWe will use tabs to demonstrate a difference between them where required.\nSee example below"),(0,o.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 4.x",value:"major"},{label:"SDK 3.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nMajor version documentation\n\n"))),(0,o.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nDeprecated version documentation\n\n")))),(0,o.kt)("p",null,"With every new major version release, the oldest documented version is removed from the documentation portal."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We will always provide a branch with the latest snapshot of the documentation before the major version release.\nYou can use that branch to host documentation for the earlier version locally."))),(0,o.kt)("h3",{id:"maintenance-and-support"},"Maintenance and Support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We provide new features and fixes ",(0,o.kt)("strong",{parentName:"li"},"only")," for the ",(0,o.kt)("strong",{parentName:"li"},"latest major release")," of the SAP Cloud SDK for Java."),(0,o.kt)("li",{parentName:"ul"},"We continue to ",(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/overview/get-support"},"support")," customers using any version of the SAP Cloud SDK for Java.\nIn case the identified solution resides in upgrading to the newer version of the SAP Cloud SDK - it will be the default recommended solution.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Upgrade early")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend upgrading to the latest major version immediately or at least not later than within 3 months after its release.\nThis guarantees:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"easy upgrade path"),(0,o.kt)("li",{parentName:"ul"},"compatibility to latest features of SAP Business Technology Platform at all times"),(0,o.kt)("li",{parentName:"ul"},"protection of your development process from disruptions in the future.\nUpgrading gets more complex if you have to migrate between more than one major version.")))),(0,o.kt)("h2",{id:"support-and-feedback"},"Support and feedback"),(0,o.kt)("p",null,"Let us know if you have any questions about our release policy.\nWe usually respond within one day.\nCheck our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/get-support"},"support channels")," and choose the one working best for you."))}f.isMDXComponent=!0}}]);