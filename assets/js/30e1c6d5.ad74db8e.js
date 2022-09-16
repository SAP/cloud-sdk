"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905)),a=n(44996);const r={title:"Proxies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Proxies",description:"This article describes how the SAP Cloud SDK handles the different proxy options and how they are configured.",keywords:["sap","cloud","sdk","proxy","connectivity","JavaScript","TypeScript"]},s=void 0,l={unversionedId:"features/connectivity/proxy",id:"features/connectivity/proxy",title:"Proxies",description:"This article describes how the SAP Cloud SDK handles the different proxy options and how they are configured.",source:"@site/docs-js/features/connectivity/proxy.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/proxy",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/connectivity/proxy.mdx",tags:[],version:"current",frontMatter:{title:"Proxies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Proxies",description:"This article describes how the SAP Cloud SDK handles the different proxy options and how they are configured.",keywords:["sap","cloud","sdk","proxy","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Destination Cache",permalink:"/cloud-sdk/docs/js/features/connectivity/destination-cache-isolation"},next:{title:"Perform HTTP Requests",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client"}},p={},d=[{value:"Making a First API Call",id:"making-a-first-api-call",level:2},{value:"What Kind of Proxies are There?",id:"what-kind-of-proxies-are-there",level:2},{value:"Manual Configuration",id:"manual-configuration",level:2},{value:"The Automatic Flow",id:"the-automatic-flow",level:2},{value:"A Word on the Used Libraries and Implementation Details",id:"a-word-on-the-used-libraries-and-implementation-details",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To learn how to generate an OData client, follow this ",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/getting-started/introduction"},"tutorial"),".\nFor this article, we assume you have generated a client for the ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/api/API_BUSINESS_PARTNER/overview"},"Business Partner service from SAP S/4HANA Cloud"),"."),(0,o.kt)("h2",{id:"making-a-first-api-call"},"Making a First API Call"),(0,o.kt)("p",null,"Once you have generated a client, this is how you make your first API call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"businessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals('1'))\n  .top(5)\n  .execute(yourDestination);\n")),(0,o.kt)("p",null,"What happens in the background for this call:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Destination fetching"),(0,o.kt)("li",{parentName:"ul"},"Handling of ETag"),(0,o.kt)("li",{parentName:"ul"},"Handling of CSRF token"),(0,o.kt)("li",{parentName:"ul"},"Serializing and deserializing the request")),(0,o.kt)("p",null,"In this document, we focus on the ",(0,o.kt)("strong",{parentName:"p"},"proxy")," part and explain how proxies are handled by the SAP Cloud SDK."),(0,o.kt)("h2",{id:"what-kind-of-proxies-are-there"},"What Kind of Proxies are There?"),(0,o.kt)("p",null,"Before we get into the details, it is important to have an overview of the different proxy types.\nThere are three possible types of proxies:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A local proxy running on the cloud platform that connects to SAP S/4HANA On-premise systems.\nThe proxy information like host and port are provided by the ",(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/daca64dacc6148fcb5c70ed86082ef91.html#loiodaca64dacc6148fcb5c70ed86082ef91__services"},"connectivity service"),".\nThis proxy will be referred to as connectivity proxy."),(0,o.kt)("li",{parentName:"ol"},"A proxy running in some landscape that makes requests to the internet.\nThis proxy will be referred to as web proxy."),(0,o.kt)("li",{parentName:"ol"},"A proxy which is used when your destination represents a tunnel that's created via the ",(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/product/PRIVATE_LINK/CLOUD/en-US"},"Private Link Service"),".\nThis proxy will be referred to as ",(0,o.kt)("inlineCode",{parentName:"li"},"PrivateLink")," proxy.")),(0,o.kt)("h2",{id:"manual-configuration"},"Manual Configuration"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," you can either give an object containing the destination name or you can configure the full destination manually.\nIf you provide the destination name the SAP Cloud SDK will try to look up as described ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"here"),"."),(0,o.kt)("p",null,"In productive use, the manual configuration will not be useful, but for testing, it might be valuable.\nThe destination object contains a field ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyConfiguration")," in which you can configure a proxy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  url: "https://MyDestinationURL.com"\n  proxyConfiguration: {\n    host: "my.proxy.host.com",\n    port: 123,\n    protocol: "http",\n    headers: {\n      Proxy-Authorization: \'yourAuthHeader could be basic or some bearer token\',\n      SAP-Connectivity-Authentication: \'\'\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SAP-Connectivity-Authentication")," field contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," issued for the user on application login.\nThis is mandatory if principal propagation is used i.e. identity propagation from the cloud application to the SAP S/4HANA system."),(0,o.kt)("h2",{id:"the-automatic-flow"},"The Automatic Flow"),(0,o.kt)("p",null,"For productive use, you do not want to include a specific proxy configuration in your code.\nHere you should let the SAP Cloud SDK handle everything.\nHence, you will provide in the ",(0,o.kt)("inlineCode",{parentName:"p"},".execute()")," method only the destination name.\nThis will trigger the destination lookup as described ",(0,o.kt)("a",{parentName:"p",href:"destination"},"here"),"."),(0,o.kt)("p",null,"The result of the lookup is a destination object which contains a property called ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy Type"),".\nThis property can have three values: ",(0,o.kt)("inlineCode",{parentName:"p"},"Internet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OnPremise"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"PrivateLink"),":"),(0,o.kt)("img",{alt:"Destination on SAP BTP",src:(0,a.Z)("img/proxyTypeDestination.png"),height:"300"}),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"OnPremise")," is selected, it is assumed that this destination points to an SAP S/4HANA On-premise system.\nIn this case, you need the connectivity proxy.\nThe SAP Cloud SDK will request the proxy host and port from the connectivity service and make a request using this proxy.\nFrom there the request will pass via the ",(0,o.kt)("strong",{parentName:"p"},"SAP Cloud Connector")," to the SAP S/4HANA On-premise system."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"Internet")," is selected it is assumed that this destination points to something on the Internet and usually no proxy is needed.\nHowever, if a proxy is needed to reach this destination it is configured in the following way."),(0,o.kt)("p",null,"The SAP Cloud SDK considers the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),".\nThe variable ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY")," is used for destinations using ",(0,o.kt)("inlineCode",{parentName:"p"},"http://")," in their URL and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," for the ones using ",(0,o.kt)("inlineCode",{parentName:"p"},"https://"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"https")," is the default protocol if the protocol is not set in the URL field of the destination."),(0,o.kt)("p",null,"The value of the two proxy variables is just a simple string following this pattern:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<protocol>://<user>:<password>?@<host>:<port>\n")),(0,o.kt)("p",null,"The user and password are optional and if they are left out no authentication header is added.\nThe protocol is also optional and the default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," since most proxies do not use an encryption layer for communication.\nThe default for the port is ",(0,o.kt)("inlineCode",{parentName:"p"},"80")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"443")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"https"),".\nExample of valid values would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"http://John:SecurePassword@some.host.com:1234\nhttps://some.host.com:1234 -> will use 443 as default\nsome.host.com:1234 -> will use http as default\nsome.host.com -> will use http and 80 as default\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you use any special character in your username or password you need to encode them using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Percent-encoding"},"percent encoding"))),(0,o.kt)("p",null,"Since environment variables are a global setting, it might become necessary to exclude some destinations from using the proxy.\nThis is possible using the ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," environment variable.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," variable contains a list of comma-separated URLs for which no proxy is used.\nCurrently, wild cards like ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," are supported in the list."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"PrivateLink")," is selected we use the same flow as we do for proxy type ",(0,o.kt)("inlineCode",{parentName:"p"},"Internet"),"."),(0,o.kt)("h2",{id:"a-word-on-the-used-libraries-and-implementation-details"},"A Word on the Used Libraries and Implementation Details"),(0,o.kt)("p",null,"The SAP Cloud SDK uses axios to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," requests.\nIn principle axios should support web proxies based on the environment variables.\nHowever, we found that the request URL using a proxy was not correctly constructed and for the connectivity proxy, an entry point was necessary anyhow."),(0,o.kt)("p",null,"Hence, the SAP Cloud SDK switches off the built-in proxy handling by axios completely by using the following axios request configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proxy": false\n}\n')),(0,o.kt)("p",null,"If a proxy becomes necessary or is configured by the discussed environment variables the SAP Cloud SDK builds directly the ",(0,o.kt)("inlineCode",{parentName:"p"},"http-agent")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"https-agent"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proxy": false,\n  "httpAgent": httpProxAgent || new http.Agent(),\n  "httpsAgent": httpsProxyAgent || new https.Agent()\n}\n')),(0,o.kt)("p",null,"This adds them to the axios configuration.\nThe agents contain the proxy configuration.\nThe standard ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/http-proxy-agent"},"http and https agents")," are used."))}u.isMDXComponent=!0}}]);