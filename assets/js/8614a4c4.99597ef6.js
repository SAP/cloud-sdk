"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=o,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={id:"cloud-foundry-xsuaa-service",title:"SAP BTP, Cloud Foundry Environment XSUAA Explained",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"CF XSUAA Service",description:"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","xsuaa","destination","connectivity"]},i=void 0,l={unversionedId:"guides/cloud-foundry-xsuaa-service",id:"guides/cloud-foundry-xsuaa-service",title:"SAP BTP, Cloud Foundry Environment XSUAA Explained",description:"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications",source:"@site/docs-java/guides/cf-xsuaa.mdx",sourceDirName:"guides",slug:"/guides/cloud-foundry-xsuaa-service",permalink:"/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service",draft:!1,tags:[],version:"current",frontMatter:{id:"cloud-foundry-xsuaa-service",title:"SAP BTP, Cloud Foundry Environment XSUAA Explained",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"CF XSUAA Service",description:"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","xsuaa","destination","connectivity"]},sidebar:"docsJavaSidebar",previous:{title:"Deploy to Cloud Foundry",permalink:"/cloud-sdk/docs/java/guides/cf-deploy"},next:{title:"Dependency Management",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies"}},s={},p=[{value:"SAP BTP, Cloud Foundry Environment XSUAA Key Use-Cases",id:"sap-btp-cloud-foundry-environment-xsuaa-key-use-cases",level:2},{value:"Read the Application Properties",id:"read-the-application-properties",level:3},{value:"Authorization Code Grant",id:"authorization-code-grant",level:2},{value:"Get Authorization Code",id:"get-authorization-code",level:3},{value:"Get OAuth2 Access Token",id:"get-oauth2-access-token",level:3},{value:"JSON Web Token Bearer Token Grant",id:"json-web-token-bearer-token-grant",level:2},{value:"Client Credentials Grant",id:"client-credentials-grant",level:2},{value:"Refresh Token Grant",id:"refresh-token-grant",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When developing and deploying an application it quickly becomes important to understand how authentication and authorizations work on the SAP BTP, Cloud Foundry environment.\nIn our tutorials and documentation, we recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"approuter")," as a proxy service to handle authentication management to your implemented application.\nThe following steps will show what happens behind the scenes.\nThe requests can be manually reproduced by a REST client of your choice, e.g. Postman or Insomnia."),(0,o.kt)("admonition",{title:"XSUAA service is developed independently of SAP Cloud SDK",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following documentation only touches a subset of features of the XSUAA Service on Cloud Foundry.\nThe SAP Cloud SDK and XSUAA are developed independently.\nWe do not provide in-depth support on XSUAA topics beyond SAP Cloud SDK use cases.\nMind, if some information seems outdated - get in touch with us and refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/"},"official XSUAA docs"),".")),(0,o.kt)("h2",{id:"sap-btp-cloud-foundry-environment-xsuaa-key-use-cases"},"SAP BTP, Cloud Foundry Environment XSUAA Key Use-Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User Login: ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization Code Grant")),(0,o.kt)("li",{parentName:"ul"},"SAP BTP Service Usage on behalf of a User: ",(0,o.kt)("inlineCode",{parentName:"li"},"JWT Bearer Token Grant")),(0,o.kt)("li",{parentName:"ul"},"SAP BTP Service Usage on behalf of a service: ",(0,o.kt)("inlineCode",{parentName:"li"},"Client Credentials Grant")),(0,o.kt)("li",{parentName:"ul"},"Resolve User Access Token: ",(0,o.kt)("inlineCode",{parentName:"li"},"Refresh Token Grant"))),(0,o.kt)("h3",{id:"read-the-application-properties"},"Read the Application Properties"),(0,o.kt)("p",null,"To create a request, we need to parse the XSUAA connection data."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Take note of your "',(0,o.kt)("em",{parentName:"p"},"application route"),"\". That's the URL for which an authorization request will be built.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"system-provided")," environment variables of your application on Cloud Foundry.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract values ",(0,o.kt)("inlineCode",{parentName:"p"},"_url_"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"_clientid_"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"_clientsecret_")," from the JSON value, located in the object ",(0,o.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES.xsuaa[0].credentials"),"."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Depending on your setup, the ",(0,o.kt)("inlineCode",{parentName:"p"},"xsuaa")," array may have more than one entry.\nBecause your application can be bound to multiple instances, e.g. through different service plans.")),(0,o.kt)("h2",{id:"authorization-code-grant"},"Authorization Code Grant"),(0,o.kt)("p",null,"Since we start without an existing access token, our journey begins with the browser flow of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#authorization-code-grant"},"Authorization Code Grant"),"."),(0,o.kt)("p",null,"This flow is split into two steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get authorization code on behalf of a single-sign-on login form."),(0,o.kt)("li",{parentName:"ul"},"Get personal access token from authorization code.")),(0,o.kt)("h3",{id:"get-authorization-code"},"Get Authorization Code"),(0,o.kt)("p",null,"You will likely need to run the following HTTP request in your browser and check the HTTP response."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make the following request:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"GET https://[xsuaa.url]/oauth/authorize\n\nQuery parameters:\n\nclient_id=[xsuaa.clientid]\nredirect_uri=[application.route]\nresponse_type=code\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'Optional values can be set for "scope" and "login_hint".\nUse ',(0,o.kt)("inlineCode",{parentName:"p"},"scope=uaa.user"),' here when facing unexpected "Unauthorized" response for the resulting ',(0,o.kt)("inlineCode",{parentName:"p"},"[code]")," in the next request."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit login form via a browser or REST API debugging tools like POSTMAN or Insomnia.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the HTTP response and extract ",(0,o.kt)("inlineCode",{parentName:"p"},"[code]")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Location")," header."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"HTTP/1.1 302 Found\nStrict-Transport-Security: max-age=31536000\nSet-Cookie: X-Uaa-Csrf=[...]; Path=/; Max-Age=86400; Expires=[...]; HttpOnly\nCache-Control: no-store\nContent-Language: en\nLocation: [application.route]?code=[code]\nX-XSS-Protection: 1; mode=block\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff\n")))),(0,o.kt)("h3",{id:"get-oauth2-access-token"},"Get OAuth2 Access Token"),(0,o.kt)("p",null,"With the authorization code we can now request a real access token from the OAuth2 service endpoint:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make the following request:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[xsuaa.clientid]\nclient_secret=[xsuaa.clientsecret]\nredirect_uri=[application.route]\ncode=[code]\ngrant_type=authorization_code\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the response:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{\n  "access_token": [access_token],\n  "token_type": "bearer",\n  "id_token": [...],\n  "refresh_token": [refresh_token],\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),(0,o.kt)("p",{parentName:"li"},"Congratulation, now you've fetched a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token"),".\nIt can be further evaluated and forwarded."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some applications like ",(0,o.kt)("inlineCode",{parentName:"p"},"_approuter_")," will save the ",(0,o.kt)("inlineCode",{parentName:"p"},"refresh_token")," to the user session for you.\nThis enables the automatic retrieval of new access tokens after the existing one has expired during the active session.")),(0,o.kt)("h2",{id:"json-web-token-bearer-token-grant"},"JSON Web Token Bearer Token Grant"),(0,o.kt)("p",null,"Several services on the SAP BTP, require a dedicated OAuth2 access token, e.g. ",(0,o.kt)("em",{parentName:"p"},"Connectivity Service")," and ",(0,o.kt)("em",{parentName:"p"},"Destination Service"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"system-provided")," environment variables of your application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the JSON value, locate the object ",(0,o.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES.destination[0].credentials"),". Make note of ",(0,o.kt)("inlineCode",{parentName:"p"},"clientid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clientsecret"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uri"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make the following request:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[destination.clientid]\nclient_secret=[destination.clientsecret]\nassertion=[access_token]\ngrant_type=urn:ietf:params:oauth:grant-type:jwt-bearer\nresponse_type=token\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the response:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{\n  "access_token": [destination_access_token],\n  "token_type": "bearer",\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),(0,o.kt)("p",{parentName:"li"},"Congratulation, you have a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"destination_access_token"),".\nIt can be used to query the ",(0,o.kt)("inlineCode",{parentName:"p"},"destination.uri")," linked destination service on behalf of the current user."))),(0,o.kt)("h2",{id:"client-credentials-grant"},"Client Credentials Grant"),(0,o.kt)("p",null,"Some applications require access to a platform service without an active user session, with ",(0,o.kt)("em",{parentName:"p"},"technical user")," credentials.\nFor example, reading a list of destinations does not require a user access token.\nInstead, we can request an access token on behalf of the service binding itself.\nHere we use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#without-authorization"},"Client Credentials Grant"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make a request:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[destination.clientid]\nclient_secret=[destination.clientsecret]\ngrant_type=client_credentials\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the response:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{\n  "access_token": [destination_access_token],\n  "token_type": "bearer",\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),(0,o.kt)("p",{parentName:"li"},"Congratulation, you have a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"destination_access_token"),".\nIt can be used to query the ",(0,o.kt)("inlineCode",{parentName:"p"},"destination.uri")," linked destination service on behalf of the service binding."))),(0,o.kt)("h2",{id:"refresh-token-grant"},"Refresh Token Grant"),(0,o.kt)("p",null,"If the current access token is expired, a new one can be requested with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#refresh-token"},"Refresh Token flow"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make a request:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[xsuaa.clientid]\nclient_secret=[xsuaa.clientsecret]\nrefresh_token=[refresh_token]\ngrant_type=refresh_token\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the response:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{\n  "access_token": [access_token],\n  "token_type": "bearer",\n  "id_token": [...],\n  "refresh_token": [refresh_token],\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),(0,o.kt)("p",{parentName:"li"},"Congratulation, you now have a refreshed ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token"),"."))))}d.isMDXComponent=!0}}]);