"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Using the SAP Application Router with the SAP Cloud SDK",sidebar_label:"Using the SAP Application Router",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",keywords:["sap","cloud","sdk","approuter","multi-tenancy","cloud-foundry","JavaScript","TypeScript"]},i="Using the SAP Application Router with the SAP Cloud SDK",s={unversionedId:"guides/how-to-use-the-approuter",id:"version-v1/guides/how-to-use-the-approuter",title:"Using the SAP Application Router with the SAP Cloud SDK",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",source:"@site/docs-js_versioned_docs/version-v1/guides/how-to-use-the-approuter.mdx",sourceDirName:"guides",slug:"/guides/how-to-use-the-approuter",permalink:"/cloud-sdk/docs/js/v1/guides/how-to-use-the-approuter",draft:!1,tags:[],version:"v1",frontMatter:{title:"Using the SAP Application Router with the SAP Cloud SDK",sidebar_label:"Using the SAP Application Router",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",keywords:["sap","cloud","sdk","approuter","multi-tenancy","cloud-foundry","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Trust and Keystores",permalink:"/cloud-sdk/docs/js/v1/guides/trust-and-key-stores"},next:{title:"How to Add Resilience",permalink:"/cloud-sdk/docs/js/v1/guides/how-to-add-resilience"}},p={},u=[{value:"SAP Application Router",id:"sap-application-router",level:2},{value:"Application Router Setup",id:"application-router-setup",level:3},{value:"Securing Your Application",id:"securing-your-application",level:2},{value:"Enabling Principal Propagation",id:"enabling-principal-propagation",level:2}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-sap-application-router-with-the-sap-cloud-sdk"},"Using the SAP Application Router with the SAP Cloud SDK"),(0,a.kt)("p",null,"In this guide, we will show you how to use the SAP Application Router together with the SAP Cloud SDK.\nYou will learn how to secure your application and configure multi-tenancy for principal propagation with an SAP Cloud SDK-based application example powered by ",(0,a.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"nestJS"),"."),(0,a.kt)("h2",{id:"sap-application-router"},"SAP Application Router"),(0,a.kt)("p",null,"When we want to enable multi-tenancy for our application, we use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sap/approuter"},"SAP Application Router"),".\nThe application router\u2019s primary purpose is to be the single entry point of a microservice-based application and act as the application\u2019s reverse proxy."),(0,a.kt)("p",null,"Its responsibilities consist of dispatching requests to backend microservices, authenticating users, and serving static content.\nThe application router checks if a given request has a valid JSON Web Token (JWT) when accessing a target service.\nIf the request contains a valid JWT, the application router forwards the request to the target service; if the request does not contain a valid JWT, the user must authenticate.\nAs we can see in the diagram below, we use an Identity Provider (IdP) to authenticate, the request is redirected to an IdP where a user gets authenticated and then redirected back to the application router for passing further according to its desired destination."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"sequenceDiagram\n  User->>Approuter: sending request\n  alt has no JWT\n    Approuter->>Identity Provider: redirecting\n    Identity Provider->>Identity Provider: authenticating\n    Identity Provider->>Identity Provider: granting JWT\n    Identity Provider->>Approuter: redirecting\n  else has JWT\n    Approuter->>Backend App: forwarding request\n  end\n")),(0,a.kt)("h3",{id:"application-router-setup"},"Application Router Setup"),(0,a.kt)("p",null,"To deploy our application router in SAP BTP Cloud Foundry, we need to configure it first.\nLet's walk through the four files we need to use."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"xs-security.json")," file defines the security and deployment options for an application.\nWith the below example, we enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"shared")," tenant-mode for our ",(0,a.kt)("inlineCode",{parentName:"p"},"xsuaa")," instance, which we need for multi-tenancy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "xsappname": "approuter-scaffold",\n  "tenant-mode": "shared"\n}\n')),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"xs-app.json"),", we specify to which backend service a request is forwarded to, and how this request has to be authenticated.\nWe can optionally also specify a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"identityProvider")," that is used for the authentication."),(0,a.kt)("p",null,"In the example below, we forward every request against the application router's ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," route to the backend destination's ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "welcomeFile": "index.html",\n  "routes": [\n    {\n      "source": "/",\n      "target": "/",\n      "destination": "approuter-scaffold"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," we only have one dependency, the application router module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "approuter",\n  "dependencies": {\n    "@sap/approuter": "*"\n  },\n  "scripts": {\n    "start": "node node_modules/@sap/approuter/approuter.js"\n  }\n}\n')),(0,a.kt)("p",null,"The manifest contains our application router, as well as environment variables which our application router needs for multi-tenancy.\nAs you see under ",(0,a.kt)("inlineCode",{parentName:"p"},"env"),", we specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"TENANT_HOST_PATTERN")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"destinations"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"destinations")," are the destinations we use in our ",(0,a.kt)("inlineCode",{parentName:"p"},"xs-app.json")," where we forward requests to.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"TENANT_HOST_PATTERN")," is a regular expression that describes how a tenant name should be retrieved from the host.\nWe also have to bind the ",(0,a.kt)("inlineCode",{parentName:"p"},"xsuaa")," which we configured with our ",(0,a.kt)("inlineCode",{parentName:"p"},"xs-security.json")," to the application router."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'applications:\n  - name: approuter-scaffold-approuter\n    routes:\n      - route: >-\n          approuter-scaffold-apps.cfapps.sap.hana.ondemand.com\n    path: .\n    memory: 128M\n    buildpacks:\n      - nodejs_buildpack\n    env:\n      TENANT_HOST_PATTERN: >-\n        "approuter-scaffold-(.*).cfapps.sap.hana.ondemand.com"\n      destinations: >-\n        [{"name":"approuter-scaffold","url":"approuter-scaffold.cfapps.sap.hana.ondemand.com","forwardAuthToken":true}]\n    services:\n      - approuter-scaffold-xsuaa\n')),(0,a.kt)("h2",{id:"securing-your-application"},"Securing Your Application"),(0,a.kt)("p",null,"To secure our application endpoints, we utilize the ",(0,a.kt)("a",{parentName:"p",href:"http://www.passportjs.org/packages/passport-jwt"},"passport")," library.\nIt lets us authenticate endpoints using a JSON web token."),(0,a.kt)("p",null,"Additionally, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"xsenv")," library to retrieve our ",(0,a.kt)("inlineCode",{parentName:"p"},"xsuaa")," credentials and the ",(0,a.kt)("inlineCode",{parentName:"p"},"xssec")," library's ",(0,a.kt)("inlineCode",{parentName:"p"},"JWTStrategy")," object for the middleware."),(0,a.kt)("p",null,"Below is a simple example, where we get the ",(0,a.kt)("inlineCode",{parentName:"p"},"approuter-scaffold-xsuaa")," which is bound to our application, use it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"JWTStrategy"),", and then forward the middleware to the passport."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { JWTStrategy } from '@sap/xssec';\nimport { getServices } from '@sap/xsenv';\nimport * as passport from 'passport';\n\nconst xsuaa = getServices({\n  xsuaa: { name: 'approuter-scaffold-xsuaa' }\n}).xsuaa;\npassport.use(new JWTStrategy(xsuaa));\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.use(passport.initialize());\n  app.use(passport.authenticate('JWT', { session: false }));\n  await app.listen(process.env.PORT || 3000);\n}\nbootstrap();\n")),(0,a.kt)("h2",{id:"enabling-principal-propagation"},"Enabling Principal Propagation"),(0,a.kt)("p",null,"To enable principal propagation with this setup, we must forward the request to our endpoints."),(0,a.kt)("p",null,"First, we forward the request in our ",(0,a.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," to our principal propagation endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Get('principal-business-partner')\n  getPrincipalBusinessPartner(\n    @Req() request: Request,\n  ): Promise<BusinessPartner[]> {\n    return this.principalBusinessPartnerService.getFiveBusinessPartners(\n      request,\n    );\n  }\n")),(0,a.kt)("p",null,"Then, we simply use the SAP Cloud SDK's ",(0,a.kt)("inlineCode",{parentName:"p"},"retrieveJwt")," function to extract the JWT from our request, and forward it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," method."),(0,a.kt)("p",null,"Below is an example using the ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerService"),", where we retrieve the top five business partners."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';\nimport { retrieveJwt } from '@sap-cloud-sdk/core';\nimport { Request } from 'express';\n\n@Injectable()\nexport class PrincipalBusinessPartnerService {\n  async getFiveBusinessPartners(request: Request): Promise<BusinessPartner[]> {\n    return BusinessPartner.requestBuilder()\n      .getAll()\n      .top(5)\n      .execute({\n        destinationName: 'MY-DESTINATION',\n        jwt: retrieveJwt(request)\n      });\n  }\n}\n")))}c.isMDXComponent=!0}}]);