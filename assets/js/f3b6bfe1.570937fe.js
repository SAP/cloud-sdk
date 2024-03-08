"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7648],{16650:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(74848),s=n(28453);const a={id:"btp-destination-service",title:"BTP Destination Service Integration",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"BTP Destination Service",description:"This article explains the SAP Cloud SDK's integration with the BTP Destination service.",keywords:["sap","cloud","sdk","destination","accessor","destinationaccessor","java","connectivity","btp"]},o=void 0,r={id:"features/connectivity/btp-destination-service",title:"BTP Destination Service Integration",description:"This article explains the SAP Cloud SDK's integration with the BTP Destination service.",source:"@site/docs-java/features/connectivity/001-btp-destination-service.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/btp-destination-service",permalink:"/cloud-sdk/docs/java/features/connectivity/btp-destination-service",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/connectivity/001-btp-destination-service.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"btp-destination-service",title:"BTP Destination Service Integration",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"BTP Destination Service",description:"This article explains the SAP Cloud SDK's integration with the BTP Destination service.",keywords:["sap","cloud","sdk","destination","accessor","destinationaccessor","java","connectivity","btp"]},sidebar:"docsJavaSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/features/connectivity/destination-service"},next:{title:"On-Premise",permalink:"/cloud-sdk/docs/java/features/connectivity/on-premise"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"About the <code>DestinationService</code>",id:"about-the-destinationservice",level:2},{value:"How Authentication at the Target System Works",id:"how-authentication-at-the-target-system-works",level:3},{value:"If Authentication Is Not Required",id:"if-authentication-is-not-required",level:3},{value:"Accessing Destination Properties",id:"accessing-destination-properties",level:4},{value:"Multitenancy",id:"multitenancy",level:3},{value:"Resilience",id:"resilience",level:2},{value:"Tweaking Time Limiter",id:"tweaking-time-limiter",level:3},{value:"Default Caching Behavior",id:"default-caching-behavior",level:2},{value:"Tweaking the Caching Behavior",id:"tweaking-the-caching-behavior",level:3},{value:"Change Detection Mode",id:"change-detection-mode",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationAccessor.html",children:(0,t.jsx)(i.code,{children:"DestinationAccessor"})})," API is part of the ",(0,t.jsxs)(i.a,{href:"https://central.sonatype.com/artifact/com.sap.cloud.sdk.cloudplatform/cloudplatform-connectivity",children:[(0,t.jsx)(i.code,{children:"cloudplatform-connectivity"})," artifact"]})," and provides easy and convenient access to destinations that can be identified by their name.\nThose are, in the vast majority of use cases, destinations managed in the ",(0,t.jsx)(i.a,{href:"https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/connectivity-in-cloud-foundry-environment",children:"BTP Destination Service on Cloud Foundry"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'Destination myDestination = DestinationAccessor.getDestination("my-destination");\n'})}),"\n",(0,t.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.p,{children:["To use the ",(0,t.jsx)(i.code,{children:"DestinationAccessor"})," to retrieve destinations from the BTP Destination Service on Cloud Foundry, the following prerequisites must be met:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.a,{href:"https://central.sonatype.com/artifact/com.sap.cloud.sdk.cloudplatform/connectivity-destination-service",children:(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.code,{children:"connectivity-destination-service"})," artifact"]})})," must be on the classpath."]}),"\n",(0,t.jsxs)(i.li,{children:["There must be ",(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.em,{children:"exactly"})," one service binding"]})," for the BTP Destination Service on Cloud Foundry available at runtime."]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{title:"Caching",type:"info",children:(0,t.jsxs)(i.p,{children:["Destinations retrieved from the BTP Destination Service for Cloud Foundry are ",(0,t.jsx)(i.a,{href:"#default-caching-behavior",children:"cached"})," for ",(0,t.jsx)(i.strong,{children:"5 minutes"})," by default."]})}),"\n",(0,t.jsxs)(i.h2,{id:"about-the-destinationservice",children:["About the ",(0,t.jsx)(i.code,{children:"DestinationService"})]}),"\n",(0,t.jsxs)(i.p,{children:["Internally, the ",(0,t.jsx)(i.code,{children:"DestinationAccessor"})," uses the ",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationService.html",children:(0,t.jsx)(i.code,{children:"DestinationService"})})," class to retrieve destinations managed by the BTP Destination Service on Cloud Foundry."]}),"\n",(0,t.jsx)(i.p,{children:"It offers APIs to"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Retrieve ",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationService.html#tryGetDestination(java.lang.String,com.sap.cloud.sdk.cloudplatform.connectivity.DestinationOptions)",children:"individual destinations"})," to ",(0,t.jsx)(i.a,{href:"#how-authentication-at-the-target-system-works",children:"connect to the target system"}),":"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'var service = new DestinationService();\n\nDestinationOptions options;\nTry<Destination> destination = service.tryGetDestination("my-destination", options);\n'})}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsxs)(i.li,{children:["Retrieve ",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationService.html#getAllDestinationProperties()",children:"all destination properties"})," and ",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationService.html#getDestinationProperties(java.lang.String)",children:"individual destination properties"})," to ",(0,t.jsx)(i.a,{href:"#if-authentication-is-not-required",children:"read destination configurations"}),":"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'var service = new DestinationService();\n\nCollection<DestinationProperties> allDestinationProperties = service.getAllDestinationProperties();\nDestinationProperties individualProperties = service.getDestinationProperties("my-destination");\n'})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:["Both for ",(0,t.jsx)(i.a,{href:"#multitenancy",children:"either a subscriber or the provider tenant"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#tweaking-the-caching-behavior",children:"Tweak caching behavior"}),":"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"DestinationService.Cache.setSizeLimit(2_000L);\nDestinationService.Cache.setExpiration(Duration.ofMinutes(10), CacheExpirationStrategy.WHEN_CREATED);\n"})}),"\n",(0,t.jsx)(i.h3,{id:"how-authentication-at-the-target-system-works",children:"How Authentication at the Target System Works"}),"\n",(0,t.jsxs)(i.p,{children:["The BTP Destination Service on Cloud Foundry offers a broad range of authentication methods.\nYou can find further details about how to configure destinations in the BTP Cockpit ",(0,t.jsx)(i.a,{href:"https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/http-destinations#configuring-authentication",children:"here"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["When retrieving ",(0,t.jsx)(i.strong,{children:"a single"})," destination, the Cloud Foundry Destination Service takes over the heavy lifting of authenticating at the target system on behalf of the calling application.\nOnce authentication has been performed successfully, the Cloud Foundry Destination Service returns a destination configuration that contains all the information required to connect to the target system - including, for example, an ",(0,t.jsx)(i.code,{children:"Authorization"})," header that can be used by the application."]}),"\n",(0,t.jsxs)(i.p,{children:["As a consequence, the SAP Cloud SDK's ",(0,t.jsx)(i.code,{children:"DestinationService"})," abstraction automatically supports all authentication methods offered by the Cloud Foundry Destination Service."]}),"\n",(0,t.jsxs)(i.admonition,{title:"Authentication Flows",type:"info",children:[(0,t.jsxs)(i.p,{children:["Please keep in mind that the authentication flows are ",(0,t.jsx)(i.strong,{children:"not"})," executed by the SAP Cloud SDK itself.\nTherefore, reusing existing ",(0,t.jsx)(i.code,{children:"Destination"})," objects for longer periods of time is ",(0,t.jsx)(i.strong,{children:"not recommended"})," as the underlying authentication information may expire (e.g. a JWT).\nInstead, ",(0,t.jsx)(i.code,{children:"Destination"})," objects should be retrieved via the ",(0,t.jsx)(i.code,{children:"DestinationLoader"})," (or ",(0,t.jsx)(i.code,{children:"DestinationAccessor"}),") API ",(0,t.jsx)(i.strong,{children:"every time"})," they are needed."]}),(0,t.jsxs)(i.p,{children:["Don't worry, there is ",(0,t.jsx)(i.a,{href:"#default-caching-behavior",children:"caching"})," in place to prevent excessive HTTP calls."]})]}),"\n",(0,t.jsx)(i.h3,{id:"if-authentication-is-not-required",children:"If Authentication Is Not Required"}),"\n",(0,t.jsx)(i.p,{children:"Sometimes, applications might be interested in reading the destination configuration without actually performing any HTTP calls.\nIn such scenarios, retrieving individual destinations from the BTP Destination Service is suboptimal as the service will perform the configured authentication flow, which can be a costly operation."}),"\n",(0,t.jsxs)(i.p,{children:["To prevent any unnecessary performance loss, the ",(0,t.jsx)(i.code,{children:"DestinationService"})," offers an API to retrieve all destination configurations.\nHereby, ",(0,t.jsx)(i.strong,{children:"no authentication"})," will be performed by the BTP Destination Service for Cloud Foundry."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'var service = new DestinationService();\n\nCollection<DestinationProperties> allDestinationProperties = service.getAllDestinationProperties();\nDestinationProperties individualProperties = service.getDestinationProperties("my-destination");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"accessing-destination-properties",children:"Accessing Destination Properties"}),"\n",(0,t.jsxs)(i.p,{children:["Both ",(0,t.jsx)(i.code,{children:"Destination"})," and ",(0,t.jsx)(i.code,{children:"DestinationProperties"})," object offers a number of APIs to access the destination configuration.\nFor example, to access the ",(0,t.jsx)(i.code,{children:"URI"})," property, you can use the following code:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'Destination destination;\nString uri = destination.get(DestinationProperty.URI).getOrElse("");\n'})}),"\n",(0,t.jsx)(i.h3,{id:"multitenancy",children:"Multitenancy"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"DestinationService"})," is tenant-aware by default.\nThis means that the ",(0,t.jsx)(i.code,{children:"DestinationService"})," will, by default, perform requests on behalf of the current tenant, if a tenant is available.\nThe tenant and principal information is taken from the ",(0,t.jsx)(i.code,{children:"ThreadContext"})," as ",(0,t.jsx)(i.a,{href:"../multi-tenancy/thread-context",children:"documented here"}),"."]}),"\n",(0,t.jsx)(i.admonition,{title:"Provider Tenant Fallback",type:"caution",children:(0,t.jsxs)(i.p,{children:["If there is ",(0,t.jsx)(i.strong,{children:"no tenant available"}),", the ",(0,t.jsx)(i.code,{children:"DestinationService"})," will ",(0,t.jsx)(i.strong,{children:"fall back to the provider tenant"}),"."]})}),"\n",(0,t.jsxs)(i.p,{children:["To avoid issues with the default ",(0,t.jsx)(i.em,{children:"provider tenant fallback"})," implementation, the destination retrieval can be configured using the ",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationOptions.html",children:(0,t.jsx)(i.code,{children:"DestinationOptions"})})," API.\nMore precisely, there are two stratgies that can be configured for the destination retrieval:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationServiceRetrievalStrategy.html",children:(0,t.jsx)(i.code,{children:"DestinationServiceRetrievalStrategy"})})," and"]}),"\n",(0,t.jsxs)(i.li,{children:["the ",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationServiceTokenExchangeStrategy.html",children:(0,t.jsx)(i.code,{children:"DestinationServiceTokenExchangeStrategy"})})]}),"\n"]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Example"}),(0,t.jsx)(i.p,{children:"Using these options can be done like follows:"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'DestinationLoader loader;\n\nDestinationOptions options =\n    DestinationOptions\n        .builder()\n        .augmentBuilder(\n            DestinationServiceOptionsAugmenter\n                .augmenter()\n                .retrievalStrategy(DestinationServiceRetrievalStrategy.ONLY_SUBSCRIBER))\n        .augmentBuilder(\n            DestinationServiceOptionsAugmenter\n                .augmenter()\n                .tokenExchangeStrategy(DestinationServiceTokenExchangeStrategy.FORWARD_USER_TOKEN))\n        .build();\n\nTry<Destination> maybeDestination = loader.tryGetDestination("my-destination", options);\n'})}),(0,t.jsxs)(i.p,{children:["In the above code, we are configuring the ",(0,t.jsx)(i.code,{children:"DestinationService"})," to only retrieve destinations from the subscriber tenant. ",(0,t.jsx)("br",{}),"\nIf there is no current tenant or the current tenant is the provider, the destination retrieval will fail."]}),(0,t.jsxs)(i.p,{children:["Furthermore, we are also using the ",(0,t.jsx)(i.code,{children:"FORWARD_USER_TOKEN"})," strategy. ",(0,t.jsx)("br",{}),"\nThis strategy will eagerly forward the current user token (e.g. JWT) to the destination service for the destination retrieval.\nThat way, the service is immediately able to perform the authentication flow on behalf of the user. ",(0,t.jsx)("br",{}),"\nIn contrast to that, using the ",(0,t.jsx)(i.code,{children:"LOOKUP_THEN_EXCHANGE"})," strategy would first retrieve the destination configuration and then perform a second HTTP request that includes the user token if the destination requires it."]}),(0,t.jsxs)(i.p,{children:["Note that you need an actual instance of ",(0,t.jsx)(i.code,{children:"DestinationLoader"})," (e.g. ",(0,t.jsx)(i.code,{children:"DestinationService"}),") to be able to supply the ",(0,t.jsx)(i.code,{children:"DestinationOptions"}),".\nThe ",(0,t.jsx)(i.code,{children:"DestinationAccessor"})," ",(0,t.jsx)(i.strong,{children:"does not"})," offer this API."]})]}),"\n",(0,t.jsx)(i.h2,{id:"resilience",children:"Resilience"}),"\n",(0,t.jsxs)(i.p,{children:["Since the ",(0,t.jsx)(i.code,{children:"DestinationService"})," is performing error prone operations (i.e. HTTP calls), it comes with some resilience mechanisms out of the box:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["(",(0,t.jsx)(i.strong,{children:"request isolated"}),") ",(0,t.jsx)(i.em,{children:"Time Limiter"})," - Destination retrieval is limited to a maximum of ",(0,t.jsx)(i.strong,{children:"6 seconds"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["(",(0,t.jsx)(i.strong,{children:"tenant isolated"}),") ",(0,t.jsx)(i.em,{children:"Circuit Breaker"})," - Requests will be blocked once more than ",(0,t.jsx)(i.strong,{children:"50%"})," of the ",(0,t.jsx)(i.strong,{children:"last 10"})," requests failed.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For fetching ",(0,t.jsx)(i.strong,{children:"individual"})," destinations, the circuit breaker will stay open for ",(0,t.jsx)(i.strong,{children:"6 seconds"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["For fetching ",(0,t.jsx)(i.strong,{children:"all"})," destinations, the circuit breaker will stay open for ",(0,t.jsx)(i.strong,{children:"60 seconds"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["(",(0,t.jsx)(i.strong,{children:"tenant isolated"}),") ",(0,t.jsx)(i.em,{children:"Bulk Head"})," - The maximum number of concurrent requests is limited to ",(0,t.jsx)(i.strong,{children:"50"}),". Queued tasks will wait for up to ",(0,t.jsx)(i.strong,{children:"60 seconds"})," before being rejected."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"tweaking-time-limiter",children:"Tweaking Time Limiter"}),"\n",(0,t.jsxs)(i.p,{children:["Even though the ",(0,t.jsx)(i.a,{href:"#resilience",children:"default time limiter configuration"})," should serve as a good starting point for many applications, it may be necessary to tweak it for specific use cases.\nThis can be achieved by building your own ",(0,t.jsx)(i.code,{children:"DestinationService"})," instance:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"import static com.sap.cloud.sdk.cloudplatform.resilience.ResilienceConfiguration.TimeLimiterConfiguration;\n\nDestinationService service =\n    DestinationService\n        .builder()\n        .withTimeLimiterConfiguration(TimeLimiterConfiguration.of(Duration.ofSeconds(30)))\n        .build();\n"})}),"\n",(0,t.jsxs)(i.p,{children:["To apply this customized configuration for all future destination retrievals, you need to ",(0,t.jsx)(i.strong,{children:"prepend"})," your customized instance to the ",(0,t.jsx)(i.code,{children:"DestinationAccessor"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"DestinationAccessor.prependDestinationLoader(service);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"default-caching-behavior",children:"Default Caching Behavior"}),"\n",(0,t.jsxs)(i.p,{children:["Besides the resilience measures explained above, the ",(0,t.jsx)(i.code,{children:"DestinationService"})," also comes with a cache.\nThis cache stores retrieved destinations ",(0,t.jsx)(i.strong,{children:"based on tenant"})," and (for some scenarios) ",(0,t.jsx)(i.strong,{children:"based on user"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"For example"}),":\nWhen retrieving a destination that uses ",(0,t.jsx)(i.em,{children:"BasicAuthentication"}),", using ",(0,t.jsx)(i.strong,{children:"tenant isolation"})," is sufficient as all users share the same credentials.\nHowever, when retrieving a destination that uses ",(0,t.jsx)(i.em,{children:"OAuth2SAMLBearerAssertion"})," authentication, the destination is isolated ",(0,t.jsx)(i.strong,{children:"based on tenant and user"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Once cached, entries will be stored for ",(0,t.jsx)(i.strong,{children:"up to 5 minutes"}),", where destinations that use JWT-based authentication may expire earlier.\nAdditionally, the cache is configured to store only the ",(0,t.jsxs)(i.strong,{children:["1000 latest entries ",(0,t.jsx)(i.em,{children:"across all tenants"})]}),".\nThis is to prevent excessive memory usage in case of a large number of tenants and/or destinations."]}),"\n",(0,t.jsx)(i.h3,{id:"tweaking-the-caching-behavior",children:"Tweaking the Caching Behavior"}),"\n",(0,t.jsxs)(i.p,{children:["Even though the ",(0,t.jsx)(i.a,{href:"#default-caching-behavior",children:"default caching behavior"})," should serve as a good starting point for many applications, it may be necessary to tweak it for specific use cases.\nFor that, the ",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationService.Cache.html",children:(0,t.jsx)(i.code,{children:"DestinationService.Cache"})})," offers a number of configuration APIs (",(0,t.jsx)(i.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationService.Cache.html",children:"JavaDoc"}),")."]}),"\n",(0,t.jsx)(i.h3,{id:"change-detection-mode",children:"Change Detection Mode"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Change detection"})," mode is a special caching mode that significantly boosts performance in most scenarios."]}),"\n",(0,t.jsx)(i.p,{children:"Traditionally, without change detection mode, all cache entries expire latest after a fixed amount of time (i.e. 5 minutes by default)."}),"\n",(0,t.jsxs)(i.p,{children:["With change detection, this time-based expiration is disabled.\nInstead, when accessing the cache, the implementation checks whether the destination has changed since the last access.\nThis is done by performing a single HTTP request (per tenant) to fetch ",(0,t.jsx)(i.strong,{children:"all destination"})," configurations - this request is cached itself as well and uses the expiration configured via ",(0,t.jsx)(i.code,{children:"DestinationService.Cache.setExpiration"})," (or the default value).\nThe received configurations are then compared to the cached ones and, if nothing has changed, the cache entry is considered valid."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Note"}),":\nDestinations that use JWT-based authentication will still be refreshed before the attached JWT expires."]}),"\n",(0,t.jsxs)(i.p,{children:["For a single destination (per tenant) this is not a benefit, but for two or more the benefit is ",(0,t.jsx)(i.strong,{children:"up to 100% per additional destination"}),".\nFor example, if your application is interacting with 5 destinations per tenant, you can expect a 3 to 4 times performance increase (i.e. 3 to 4 times less costly HTTP calls)."]}),"\n",(0,t.jsx)(i.p,{children:"If that behavior is not desired, you may disable the change detection mode:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"DestinationService.Cache.disableChangeDetection();\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var t=n(96540);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);