"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?i.createElement(m,s(s({ref:t},u),{},{components:n})):i.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=n(87462),a=(n(67294),n(3905)),o=n(20807),s=n(44996);const r={title:"Destinations",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},l=void 0,d={unversionedId:"features/connectivity/destination",id:"version-v1/features/connectivity/destination",title:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",source:"@site/docs-js_versioned_docs/version-v1/features/connectivity/destination.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/destination",permalink:"/cloud-sdk/docs/js/v1/features/connectivity/destination",draft:!1,tags:[],version:"v1",frontMatter:{title:"Destinations",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"OData v4 Client API",permalink:"/cloud-sdk/docs/js/v1/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript"},next:{title:"Destination Cache",permalink:"/cloud-sdk/docs/js/v1/features/connectivity/destination-cache-isolation"}},u={},c=[{value:"Creating Destinations Manually",id:"creating-destinations-manually",level:2},{value:"Referencing Destinations by Name",id:"referencing-destinations-by-name",level:2},{value:"Local Environment Variable",id:"local-environment-variable",level:3},{value:"Register Destination via the SAP Cloud SDK",id:"register-destination-via-the-sap-cloud-sdk",level:3},{value:"Service Binding Environment Variables",id:"service-binding-environment-variables",level:3},{value:"Destination Service",id:"destination-service",level:3},{value:"Authentication and JSON Web Token Retrieval",id:"authentication-and-json-web-token-retrieval",level:4},{value:"Multi-Tenancy",id:"multi-tenancy",level:4},{value:"Destination Lookup Without a JSON Web Token",id:"destination-lookup-without-a-json-web-token",level:4},{value:"Destination Fetch Options",id:"destination-fetch-options",level:3},{value:"Destination Properties",id:"destination-properties",level:2},{value:"SAP Client",id:"sap-client",level:3},{value:"Trust Configuration",id:"trust-configuration",level:3},{value:"JWT Validation",id:"jwt-validation",level:3},{value:"Additional Headers and Query Parameters on Destinations",id:"additional-headers-and-query-parameters-on-destinations",level:3},{value:"Rules of Precedence",id:"rules-of-precedence",level:4}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many applications on SAP Business Technology Platform (SAP BTP) communicate with other systems, e.g. line of business solutions.\nSAP BTP provides the concept of ",(0,a.kt)("em",{parentName:"p"},"destinations")," for convenient communication between SAP BTP and other systems.\nA destination is an object with the following information, among others:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL"),(0,a.kt)("li",{parentName:"ul"},"authentication configuration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v1/features/connectivity/proxy"},"proxy settings"))),(0,a.kt)("p",null,"Destinations are managed separately from applications on SAP BTP and can be retrieved through the destination service at runtime.\nThe reasons to separate destinations and the application are manifold:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can securely store authentication information that should not be part of the application code."),(0,a.kt)("li",{parentName:"ul"},"You can update resource locations without touching the application code."),(0,a.kt)("li",{parentName:"ul"},"Different customers may want to configure different systems."),(0,a.kt)("li",{parentName:"ul"},"Multiple applications might want to access the same systems.")),(0,a.kt)("p",null,"The SAP Cloud SDK helps you to authenticate against the destination service and retrieve destinations into your application."),(0,a.kt)("p",null,"The SAP Cloud SDK supports ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/features/odata/overview"},"OData")," and ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/features/openapi/overview"},"OpenApi")," services.\nFor both service types, the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," method triggers a request to a target system.\nFor OData services, you can invoke the method as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const responseOData = await BusinessPartner.requestBuilder()\n  .getAll()\n  .execute(myDestination);\n")),(0,a.kt)("p",null,"Similarly for OpenAPI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const responseOpenApi = await MyApi.myFunction().execute(myDestination);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"myDestination")," is an SAP Cloud SDK representation of a ",(0,a.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.Destination",name:"destination",mdxType:"LinkToLatestJsApiDocs"}),".\nThe given request is executed against ",(0,a.kt)("inlineCode",{parentName:"p"},"myDestination"),"."),(0,a.kt)("p",null,"For the rest of the document, we will discuss the different options on destination lookup.\nAll statements equally apply to OData and OpenAPI-based services."),(0,a.kt)("h2",{id:"creating-destinations-manually"},"Creating Destinations Manually"),(0,a.kt)("p",null,"You can construct a destination object manually and pass the destination information directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," method.\nThe minimal requirement towards a manually constructed destination is that you provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".execute({ url: 'https://example.com'})\n")),(0,a.kt)("p",null,"This, however, is not recommended for productive use as you would lose the benefits of separating destinations from applications."),(0,a.kt)("h2",{id:"referencing-destinations-by-name"},"Referencing Destinations by Name"),(0,a.kt)("p",null,"Instead of defining your destination manually, you can reference it by a name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".execute({ destinationName: 'myDestination' })\n")),(0,a.kt)("p",null,"The SAP Cloud SDK searches for the destination by its name in the following locations and the following order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"local environment variables"),(0,a.kt)("li",{parentName:"ol"},"register a destination in the SAP Cloud SDK"),(0,a.kt)("li",{parentName:"ol"},"service binding environment variables"),(0,a.kt)("li",{parentName:"ol"},"SAP BTP's destination service")),(0,a.kt)("p",null,"The search stops, once a destination is found.\nTherefore, if a destination with the same name exists in multiple locations, the destination that occurs earliest during the search takes precedence over other destinations with the same name."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The second option ",(0,a.kt)("inlineCode",{parentName:"p"},"register a destination")," was introduced in version 2.0 of the SAP Cloud SDK.")),(0,a.kt)("h3",{id:"local-environment-variable"},"Local Environment Variable"),(0,a.kt)("p",null,"This option is present for deployment and testing in a local environment outside the SAP BTP where no destination services are available.\nIf a ",(0,a.kt)("inlineCode",{parentName:"p"},"destinations")," environment variable is present, it will be used for the destination lookup as described above.\nThe value is expected to be a stringified JSON array, where the items adhere to the ",(0,a.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.Destination",name:"Destination interface",mdxType:"LinkToLatestJsApiDocs"}),".\nExample: ",(0,a.kt)("inlineCode",{parentName:"p"},'"[{\\"name\\": \\"TESTINATION\\", \\"url\\": \\"http://url.hana.ondemand.com\\", \\"username\\": \\"DUMMY\\", \\"password\\": \\"dummy\\"}]"'),"."),(0,a.kt)("p",null,"The SAP Cloud SDK provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"setTestDestination(destination)")," function to add a destination to the environment variable for the current process programmatically.\nIt takes a ",(0,a.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.Destination",name:"destination object",mdxType:"LinkToLatestJsApiDocs"}),", transforms it to a JSON object, and adds it to ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.destinations"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { setTestDestination } from '@sap-cloud-sdk/test-util';\n\nsetTestDestination({\n  authentication: 'NoAuthentication',\n  name: 'TESTINATION',\n  isTrustingAllCertificates: false,\n  url: 'https://mys4hana.com'\n});\n")),(0,a.kt)("p",null,"This would set a destination with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"TESTINATION"),".\nAt runtime, the SAP Cloud SDK will check the environment variable for a destination with the given name and use it if present.\nNote that the SAP Cloud SDK also offers a ",(0,a.kt)("inlineCode",{parentName:"p"},"mockTestDestination()")," method, which reads in a ",(0,a.kt)("inlineCode",{parentName:"p"},"systems.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials.json")," to create destinations.\nThe advantage of files is that they can be excluded from the repository since they contain sensitive information."),(0,a.kt)("p",null,"Note that this approach is not suitable for multi-tenant scenarios, because only the destination service can return destinations for different tenants."),(0,a.kt)("h3",{id:"register-destination-via-the-sap-cloud-sdk"},"Register Destination via the SAP Cloud SDK"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This functionality was introduced in version 2.0 of the SAP Cloud SDK.")),(0,a.kt)("p",null,"Usually, the destination service should be used in production to fetch a destination, including an authentication token.\nIn the case of frequent service-to-service communication, requesting the destination service every time for a target-specific ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," would mean a big overhead.\nAlso in cases where the destination needs no authentication at all the detour over the destination service is sometimes not desirable.\nA solution for such use-cases is registering your destination in the SAP Cloud SDK cache:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { registerDestination } from '@sap-cloud-sdk/core';\n\nconst destination = {\n  name: 'MY-DESTINATION',\n  url: 'https://mys4hana.com'\n};\n\nregisterDestination(destination, options);\n\nMyRequest.execute({ destinationName: 'MY-DESTINATION' });\n")),(0,a.kt)("p",null,"If a registered destination is found, the lookup is stopped, and the call to the destination service is avoided.\nYou can register a full destination object, including authentication, but we do not recommend storing authentication information in the registered destination."),(0,a.kt)("p",null,"Instead, we recommend enabling token forwarding on the destination.\nIf you enable this option, the token used to execute the request is forwarded to the destination:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const destination = {\n  name: 'FORWARD-DESTINATION',\n  url: 'https://mys4hana.com',\n  forwardAuthToken: true\n};\n\nregisterDestination(destination, options);\n\nMyRequest.execute({\n  destinationName: 'FORWARD-DESTINATION',\n  jwt: 'forwardedJwt'\n});\n")),(0,a.kt)("p",null,"This only works if your target system accepts the unchanged JWT.\nIf a transformation is needed, e.g., OAuth to SamlBearer, you need to use the destination service for that."),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"registerDestination")," method is tenant aware.\nWe have a separate ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/features/connectivity/destination-cache-isolation"},"guide")," on the cache options used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"registerDestination")," method."),(0,a.kt)("h3",{id:"service-binding-environment-variables"},"Service Binding Environment Variables"),(0,a.kt)("p",null,"The service credentials, in other words ",(0,a.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," environment variables, represent services bound to the destination.\nIf you want to consume such a service, the SAP Cloud SDK can create a destination from the service binding for you.\nYou do not need to create a dedicated destination in the destination service.\nProvide the name of the service instance as the destination name and the SAP Cloud SDK will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find the service binding with the given name"),(0,a.kt)("li",{parentName:"ul"},"Extract the URL from the service binding"),(0,a.kt)("li",{parentName:"ul"},"Fetch a client-credential-grant token if needed"),(0,a.kt)("li",{parentName:"ul"},"Return a destination containing the token and URL")),(0,a.kt)("p",null,"Currently, 5 services types are supported out of the box:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"business-logging")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s4-hana-cloud")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"saas-registry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"workflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"destination")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"service-manager"))),(0,a.kt)("p",null,"If you need a destination for a different service, create a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceBindingTransformFn")," and pass it with ",(0,a.kt)("inlineCode",{parentName:"p"},"destinationFetchOptions")," or consider creating a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/issues/new?assignees=&labels=feature+request&template=feature_request.md&title="},"feature request"),".\nContributions providing transform functions are highly welcome."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceBindingTransformFn")," was introduced in version 2.0 of the SAP Cloud SDK.")),(0,a.kt)("h3",{id:"destination-service"},"Destination Service"),(0,a.kt)("p",null,"In a productive environment, you will use a ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html"},"Destination service")," to retrieve destinations."),(0,a.kt)("h4",{id:"authentication-and-json-web-token-retrieval"},"Authentication and JSON Web Token Retrieval"),(0,a.kt)("p",null,"To access the destination service, the SAP Cloud SDK will first fetch an access token from the XSUAA service.\nThe token retrieved from the XSUAA service is used to make a call to the destination service and receive the destinations.\nThe destination service returns a destination with all relevant authentication information depending on the used authentication flow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PrincipalPropagation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NoAuthentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BasicAuthentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OAuth2SAMLBearerAssertion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OAuth2UserTokenExchange")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OAuth2ClientCredentials")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OAuth2Password")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ClientCertificateAuthentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OAuth2JWTBearer"))),(0,a.kt)("p",null,"The SAP Cloud SDK automatically parses the response of the destination service and uses the provided authentication information for the request to the target system.\nFor a simple service, this would be the end of the story."),(0,a.kt)("h4",{id:"multi-tenancy"},"Multi-Tenancy"),(0,a.kt)("p",null,"However, the destination service is special in the way that it is a ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant aware service"),".\nSuch services make it possible to build multi-tenant applications.\nSo, what defines a tenant-aware service?"),(0,a.kt)("p",null,"Assume you want to build a simple application showing the 5 newest business partners in an SAP S/4HANA system.\nYou want to offer this application as a service to customers.\nOf course, you want to make this service cost-efficient and host it only once and let multiple customers use it.\nThis now leads naturally to the requirement that your service needs to return the data related to specific customers.\nA customer is represented by an account on the SAP BTP and service considering the account is a ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant aware service"),"."),(0,a.kt)("p",null,"Tenant-aware services on the SAP BTP are offered to customers via a ",(0,a.kt)("inlineCode",{parentName:"p"},"subscription")," which works on a high level as follows:\nIf a customer wants to use a service, a subscription is created linking the customer account and the one account hosting the service.\nIn the following, the term ",(0,a.kt)("inlineCode",{parentName:"p"},"subscriber account")," will be used for the accounts using a service and ",(0,a.kt)("inlineCode",{parentName:"p"},"provider account")," for the one hosting it."),(0,a.kt)("p",null,"After this little definition detour, let's go back to the destination service and the SAP Cloud SDK.\nFor simplicity, an optional argument of the destination lookup has been neglected in the beginning:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".execute({ destinationName: 'myDestination', jwt: 'yourJWT',})\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt")," argument takes the JSON web token (JWT) issued by an XSUAA as input.\nAdditional information on how to retrieve JWTs can be found ",(0,a.kt)("a",{parentName:"p",href:"../../guides/how-to-retrieve-jwt"},"here"),".\nThis token contains a field ",(0,a.kt)("inlineCode",{parentName:"p"},"zid")," holding the tenant id, which will be used in the lookup process.\nThe lookup process done by the SAP Cloud SDK involves the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request an access token for the destination service and a given tenant id from the XSUAA."),(0,a.kt)("li",{parentName:"ul"},"Due to the subscription between provider and subscriber, the XSUAA is allowed to issue the token."),(0,a.kt)("li",{parentName:"ul"},"The token allows for calling the destination service on behalf of the given tenant.\nThe tenant and service information is encoded in the access token."),(0,a.kt)("li",{parentName:"ul"},"Make a call to the destination service using the obtained access token."),(0,a.kt)("li",{parentName:"ul"},"The destination maintained in the given tenant is returned.")),(0,a.kt)("p",null,"If no token is given or the destination is not found in the subscriber account, the provider account is used as a fallback.\nTo control this fallback behavior, a selection strategy can be passed to the destination lookup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".execute({ destinationName: 'myDestination', jwt: 'yourJWT' }, { selectionStrategy:'alwaysSubscriber' })\n")),(0,a.kt)("p",null,"There are three selection strategies defined in the SAP Cloud SDK: ",(0,a.kt)("inlineCode",{parentName:"p"},"alwaysSubscriber"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"alwaysProvider"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"subscriberFirst"),".\nThe selection strategy can be passed as an optional argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},".execute()")," method.\nThe default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"subscriberFirst"),".\nThe selection strategies can be used to control for which account a destination lookup is attempted:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AlwaysSubscriber"),": Only try to get destinations from the subscriber account.\nA valid JWT is mandatory to receive something."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AlwaysProvider"),": Only try to get the destination from the provider account.\nA JWT is not needed.\nEven if you present a subscriber JWT, the provider destination will be returned if present."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SubscriberFirst"),": Tries to get from the subscriber first using the JWT.\nIf no valid JWT is provided or the destination is not found, it tries the provider as described for ",(0,a.kt)("inlineCode",{parentName:"li"},"AlwaysProvider"),".")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"One aspect has been left out for simplicity.\nIn principle, it is possible to define destinations not only on the account level but also on the destination service level.\nThese destinations are called ",(0,a.kt)("inlineCode",{parentName:"p"},"instance destinations")," since they are tied to a service binding called instance on SAP BTP.\nIn every request, these destinations are added to the destinations returned by the destination service.")),(0,a.kt)("h4",{id:"destination-lookup-without-a-json-web-token"},"Destination Lookup Without a JSON Web Token"),(0,a.kt)("p",null,"There are situations where you do not have a JWT issued by the XSUAA but need to lookup a destination, e.g., in background processes.\nIn such situations, the property ",(0,a.kt)("inlineCode",{parentName:"p"},"iss")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"DestinationAccessorOptions")," can be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".execute(\n  { destinationName: 'myDestination' },\n  { iss: yourIssuerValue }\n)\n")),(0,a.kt)("p",null,"The value for ",(0,a.kt)("inlineCode",{parentName:"p"},"iss")," is supposed to be the same as in a JWT issued from the XSUAA, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://yourSubdomain.localhost:8080/uaa/oauth/token"),".\nIn principle, only the host of the URL is relevant, but since the same parsing and replacement methods are used for the JWT handling, the URL has to be provided in the format above."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If a JWT is used in the destination lookup, a validation of the provided token is performed.\nThis validation ensures that the JWT has not been manipulated.\nIf only the ",(0,a.kt)("inlineCode",{parentName:"p"},"iss")," is provided, no such validation is performed.\nNote that the given subdomain value defines from which tenant destinations are fetched.\nSo a wrong value may break the isolation for tenants.\nIt is your responsibility as a developer to ensure that the provided value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"iss")," property is valid.")),(0,a.kt)("h3",{id:"destination-fetch-options"},"Destination Fetch Options"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This section is written for version 2 of the SAP Cloud SDK.\nMost of the options are also available in version 1 but not all e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout"),".")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getDestination()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," perform a destination lookup by name as discussed above.\nYou can pass options to adjust how the destination is fetched.\nIn the section above, we listed already a few of the options but this section gives a comprehensive overview:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"destinationName"),": The name of the destination to be fetched.\nThis is the only mandatory property, all the other parameters are optional."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"serviceBindingTransformFn"),": A custom transformation function to control how a ",(0,a.kt)("inlineCode",{parentName:"li"},"Destination")," is built from the given ",(0,a.kt)("inlineCode",{parentName:"li"},"ServiceBinding"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jwt"),": The JSON web token.\nCrucial in multi-tenant scenarios or for user-dependent authentication flows."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iss"),": Issuer URL which can be used to obtain destination for a subscriber tenant if no JWT is present.\nRead the detailed documentation above before using this option."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selectionStrategy"),": Specifies the order in which accounts are searched for a destination.\nDefault is ",(0,a.kt)("inlineCode",{parentName:"li"},"subscriberFirst"),".\nAlternative values are ",(0,a.kt)("inlineCode",{parentName:"li"},"alwaysProvider")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"alwaysSubscriber"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iasToXsuaaTokenExchange"),": Switches on token exchange from IAS format tokens to XSUAA if needed using the ",(0,a.kt)("inlineCode",{parentName:"li"},"@sap/xssec")," library.\nThe default value is true."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cacheVerificationKeys"),": Switches on caching for the verification certificates for the JWT.\nThe default value is true."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useCache"),": Switches on caching for destinations received from the destination service.\nThe default value is false."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isolationStrategy"),": Specifies how the destination cache is scoped.\nThe value is automatically set but ",(0,a.kt)("a",{parentName:"li",href:"./destination-cache-isolation"},"under certain conditions")," you may want to optimize it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enableCircuitBreaker"),": Switches on circuit breakers to protect the calls to the ",(0,a.kt)("inlineCode",{parentName:"li"},"XSUAA")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"destination-service"),".\nThe default value is true."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),": Sets the timeout for the calls to SAP BTP services like ",(0,a.kt)("inlineCode",{parentName:"li"},"XSUAA")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"destination-service"),".\nThe value is in milliseconds and the default value is 10000 (10 seconds).\nThere is a second timeout option on the request level, setting the timeout for the calls to the destination target.")),(0,a.kt)("h2",{id:"destination-properties"},"Destination Properties"),(0,a.kt)("p",null,"The destination object may contain additional properties.\nThe properties change the behavior of how the SAP Cloud SDK handles the HTTP request at runtime."),(0,a.kt)("h3",{id:"sap-client"},"SAP Client"),(0,a.kt)("p",null,"The property ",(0,a.kt)("inlineCode",{parentName:"p"},"sap-client")," is considered by the SAP Cloud SDK.\nWhen this property is set, it is used as the header parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"sap-client")," with the specified value in the HTTP request to the target system."),(0,a.kt)("img",{alt:"SAP client property on destination",src:(0,s.Z)("img/destination-property-sap-client.png"),className:"center"}),(0,a.kt)("h3",{id:"trust-configuration"},"Trust Configuration"),(0,a.kt)("p",null,"By default, SAP BTP only trusts certain certificate authorities.\nIf you want to make HTTPS requests against systems that use certificates from other certificate authorities, you can configure the following properties:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"TrustStoreLocation: The SAP Cloud SDK adds the provided certificate in the ",(0,a.kt)("inlineCode",{parentName:"li"},"ca")," property of the ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/tls.html#tlscreatesecurecontextoptions"},"node client"),"."),(0,a.kt)("li",{parentName:"ol"},"TrustAll: The SAP Cloud SDK adds the inverted value as the ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/tls.html#class-tlstlssocket"},"rejectUnauthorized"))),(0,a.kt)("p",null,"For additional information on trust configuration have a look at the more ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/guides/trust-and-key-stores"},"detailed guide"),".\nPlease use the ",(0,a.kt)("inlineCode",{parentName:"p"},"TrustAll")," with great caution since it opens the gate to man-in-the-middle attacks."),(0,a.kt)("h3",{id:"jwt-validation"},"JWT Validation"),(0,a.kt)("p",null,"If you use JWTs not issued by the XSUAA service, you can configure validation by the destination service using the ",(0,a.kt)("inlineCode",{parentName:"p"},"x_user_token.jwks")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"x_user_token.jwks_uri")," property.\nFor more details on JWTs, have a look at the more detailed ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/guides/how-to-retrieve-jwt"},"guide"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you want to use a custom JWT in combination with the destination cache, the JWT must contain the properties ",(0,a.kt)("inlineCode",{parentName:"p"},"zid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"user_id"),".\nThese properties are used to construct the cache key.")),(0,a.kt)("h3",{id:"additional-headers-and-query-parameters-on-destinations"},"Additional Headers and Query Parameters on Destinations"),(0,a.kt)("p",null,"The destination service has a convention to define static headers and query parameters on destinations.\nCreate additional properties in your destination in the SAP BTP cockpit and define their values as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URL.headers.<header-key>")," for headers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URL.queries.<query-key>")," for query parameters")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<header-key>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<query-key>")," with the name of your headers or query parameters and set the respective values."),(0,a.kt)("img",{alt:"Additional properties on destination",src:(0,s.Z)("img/destination-additional-properties.png"),className:"center"}),(0,a.kt)("p",null,"In the example above, the destination has an ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey")," header with the value ",(0,a.kt)("inlineCode",{parentName:"p"},"<my-api-key>")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"language")," query parameter with the value ",(0,a.kt)("inlineCode",{parentName:"p"},"EN"),"."),(0,a.kt)("p",null,"The SAP Cloud SDK adds those additional headers and query parameters for every communication with the given destination."),(0,a.kt)("h4",{id:"rules-of-precedence"},"Rules of Precedence"),(0,a.kt)("p",null,"The SAP Cloud SDK adds headers and query parameters from different sources.\nSome sources take precedence over others (highest to lowest):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"custom"),": headers/query parameters added to a request directly"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"additional properties"),": headers/query parameters defined on a destination"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"internal"),": headers/query parameters built by the SAP Cloud SDK")),(0,a.kt)("p",null,"Headers or query parameters built by the SAP Cloud SDK are overwritten by additional headers and query parameters on the destination.\nCustom headers and query parameters, however, overwrite the additional properties."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Header names")," keep their casing but overwrite other headers independent of the casing, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTHORIZATION")," overwrites ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization"),".\nThis does not apply to query ",(0,a.kt)("strong",{parentName:"p"},"parameter names"),"`.")))}h.isMDXComponent=!0},20807:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),a=n(63081);const o=function(e){let{slug:t,name:n}=e;return i.createElement("a",{href:"/cloud-sdk/api/"+a.Z[0]+"/"+t},n)}}}]);