"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2784],{9457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(74848),i=t(28453),s=t(11610);t(91517),t(5594);const r={id:"troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},a=void 0,l={id:"troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",source:"@site/docs-java/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting-frequent-problems",permalink:"/cloud-sdk/docs/java/troubleshooting-frequent-problems",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},sidebar:"docsJavaSidebar",previous:{title:"Use OData v4 Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"},next:{title:"Release Policy",permalink:"/cloud-sdk/docs/java/release-policy"}},c={},d=[{value:"Solving Common Problems",id:"solving-common-problems",level:2},{value:"Tenant or Principal Not Available",id:"tenant-or-principal-not-available",level:2},{value:"Provider Instead of Subscriber Account Used",id:"provider-instead-of-subscriber-account-used",level:2},{value:"Connecting to an ERP System fails",id:"connecting-to-an-erp-system-fails",level:2},{value:"Compilation Failures in the Generated OData Classes",id:"compilation-failures-in-the-generated-odata-classes",level:2},{value:"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version",id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version",level:2},{value:"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment",id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment",level:2},{value:"<code>No Such Method: com.google.gson.JsonParser.parseReader</code>",id:"no-such-method-comgooglegsonjsonparserparsereader",level:2},{value:"<code>Class Not Found: JsonEncoder</code>",id:"class-not-found-jsonencoder",level:2},{value:"OData Request Rejected by or Failed in OData Service",id:"odata-request-rejected-by-or-failed-in-odata-service",level:2},{value:"<code>java.lang.IllegalArgumentException: JClass name empty</code>",id:"javalangillegalargumentexception-jclass-name-empty",level:2},{value:"<code>DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found</code>",id:"destinationaccessexception-failed-to-read-authentication-token-the-destination-service-responded-with-an-error-could-not-verify-the-provided-csrf-token-because-your-session-was-not-found",level:2},{value:"<code>SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target</code>",id:"sslhandshakeexception-pkix-path-building-failed-sunsecurityprovidercertpathsuncertpathbuilderexception-unable-to-find-valid-certification-path-to-requested-target",level:2},{value:"<code>DefaultHttpClientFactory not a subtype</code> Error",id:"defaulthttpclientfactory-not-a-subtype-error",level:2},{value:"Incoming Requests Fail Because a Request Header is Too Large",id:"incoming-requests-fail-because-a-request-header-is-too-large",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{}),"\n",(0,o.jsx)(n.h2,{id:"solving-common-problems",children:"Solving Common Problems"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Check if you're using the latest ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/java/release-notes",children:"SAP Cloud SDK version"}),".\nWe release significant updates bi-weekly."]}),"\n",(0,o.jsxs)(n.li,{children:["Try searching on ",(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk",children:"Stack Overflow"}),"\nYou can ",(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions",children:"ask there questions"})," as well by tagging it with ",(0,o.jsx)(n.code,{children:"sap-cloud-sdk"})]}),"\n",(0,o.jsx)(n.li,{children:"Check this page for known solutions for most frequent problems"}),"\n",(0,o.jsxs)(n.li,{children:["Welcome to our ",(0,o.jsx)(n.a,{href:"/docs/overview/get-support",children:"awesome support"})," if nothing else helps."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"tenant-or-principal-not-available",children:"Tenant or Principal Not Available"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsx)(n.p,{children:"Tenant or principal information is not available or an incorrect tenant is used."})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"There was no JWT in the authorization header."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The SAP Cloud SDK components are not registered as listeners on incoming requests.\nSee ",(0,o.jsx)(n.a,{href:"getting-started#framework-integration",children:"Framework Support"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["An operation is performed in an asynchronous manner without propagating the ",(0,o.jsx)(n.code,{children:"ThreadContext"}),".\nSee ",(0,o.jsx)(n.a,{href:"features/multi-tenancy/thread-context#running-asynchronous-operations",children:"Running Asynchronous Operations"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["A BAPI/RFC call was attempted while using resilience or multithreading capabilities of the SAP Cloud SDK.\nSee ",(0,o.jsx)(n.a,{href:"features/bapi-and-rfc/overview#subscriber-tenant-is-not-found-at-runtime",children:"Subscriber Tenant Is Not Found at Runtime"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"provider-instead-of-subscriber-account-used",children:"Provider Instead of Subscriber Account Used"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsx)(n.p,{children:"Destinations are returned only for the provider account, but not for a subscriber account."})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The SAP Cloud SDK defaults back to the provider account if no tenant information is available.\nSee the above section on ",(0,o.jsx)(n.a,{href:"#tenant-or-principal-not-available",children:"Tenant or Principal not available"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"connecting-to-an-erp-system-fails",children:"Connecting to an ERP System fails"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms:"})}),(0,o.jsxs)(n.p,{children:["The ERP system unexpectedly responds with ",(0,o.jsx)(n.em,{children:"401: Unauthorized"})," or ",(0,o.jsx)(n.em,{children:"403: Forbidden"}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The SAP Client and Locale headers will be missing if the properties ",(0,o.jsx)(n.code,{children:"sap-client"})," and ",(0,o.jsx)(n.code,{children:"sap-locale"})," are not defined.\nSee ",(0,o.jsx)(n.a,{href:"features/connectivity/destination-service#connect-to-on-premise-s4hana-system",children:"Connecting to SAP S/4HANA"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"compilation-failures-in-the-generated-odata-classes",children:"Compilation Failures in the Generated OData Classes"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms:"})}),(0,o.jsxs)(n.p,{children:["Compilation fails due to missing ",(0,o.jsx)(n.em,{children:"Getters"})," and ",(0,o.jsx)(n.em,{children:"Setters"})," on entity objects."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Getters and Setters will be missing if ",(0,o.jsx)(n.a,{href:"https://projectlombok.org/",children:"Lombok"})," is not present in the dependency tree of your project.\nSee ",(0,o.jsx)(n.a,{href:"features/odata/vdm-generator#using-the-odata-generator",children:"Using the OData Generator"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Getters and Setters will be shown red if your IDE does not support Lombok. Hence, install the Lombok plugin for your IDE.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For IntelliJ, install ",(0,o.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/6317-lombok",children:"the Lombok plugin"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["For Eclipse, follow ",(0,o.jsx)(n.a,{href:"https://projectlombok.org/setup/eclipse",children:"this guide"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version",children:"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms:"})}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"MethodNotFound"}),", ",(0,o.jsx)(n.code,{children:"ClassDefNotFound"})," or similar exceptions occur."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Conflicting dependency versions may cause such issues.\nSee the section on ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/java/guides/manage-dependencies#dealing-with-dependency-conflicts",children:"Managing Dependencies"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment",children:"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms:"})}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The Java app executes multiple threads and runs with good performance on a powerful local machine."}),"\n",(0,o.jsx)(n.li,{children:"The performance significantly drops after the app is deployed to SAP Business Technology Platform - Cloud Foundry and CPU utilization is always around 100%."}),"\n"]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A powerful developer's machine usually has much better CPU and memory capacity than a standard cloud instance."}),"\n",(0,o.jsx)(n.li,{children:"SAP BTP, Cloud Foundry environment provides 1/4 of CPU unit per every GB of memory.\nWith maximum memory per instance of 8 GB, you can get a maximum of 2 CPU cores."}),"\n",(0,o.jsxs)(n.li,{children:["All the limitations are subject to change.\nPlease check the latest details about ",(0,o.jsx)(n.a,{href:"https://help.sap.com/viewer/3504ec5ef16548778610c7e89cc0eac3/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html#loio9809fa4f02cb4696baea5c23d6eaac94",children:"SAP BTP, Cloud Foundry Environment quotas and limitations"})]}),"\n",(0,o.jsx)(n.li,{children:"If even after achieving the maximum vertical scale of your instance, your app doesn't reach the desired performance level, try to optimize it.\nConsider scaling it horizontally or different custom solutions to boost performance where it lags."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"no-such-method-comgooglegsonjsonparserparsereader",children:(0,o.jsx)(n.code,{children:"No Such Method: com.google.gson.JsonParser.parseReader"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsxs)(n.p,{children:["In your application log you find exception ",(0,o.jsx)(n.code,{children:"java.lang.NoSuchMethodError: com.google.gson.JsonParser.parseReader(Lcom/google/gson/stream/JsonReader;)Lcom/google/gson/JsonElement;"}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Your project uses the ",(0,o.jsx)(n.a,{href:"https://github.com/google/gson",children:"GSON library"})," in version ",(0,o.jsx)(n.code,{children:"2.8.5"})," or earlier.\nThis could happen if you do not use the SAP Cloud SDK Bill-of-Material.\nTo solve this issue, update GSON to at least version ",(0,o.jsx)(n.code,{children:"2.8.6"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"class-not-found-jsonencoder",children:(0,o.jsx)(n.code,{children:"Class Not Found: JsonEncoder"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsxs)(n.p,{children:["Your application does not start and fails with the error message ",(0,o.jsx)(n.code,{children:'"Could not create component [encoder] of type [com.sap.hcp.cf.logback.encoder.JsonEncoder] java.lang.ClassNotFoundException: com.sap.hcp.cf.logback.encoder.JsonEncoder"'}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Your project uses the ",(0,o.jsx)(n.a,{href:"http://logback.qos.ch/",children:"Logback library"})," for application logging.\nThe required dependency ",(0,o.jsx)(n.code,{children:"com.sap.hcp.cf.logging:cf-java-logging-support-logback"})," is missing.\nTo solve this issue, add this dependency to your project.\nAlso, use the SAP Cloud SDK Bill-Of-Material in your POM to manage the version of this dependency."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"odata-request-rejected-by-or-failed-in-odata-service",children:"OData Request Rejected by or Failed in OData Service"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsx)(n.p,{children:"Your OData request returns with a 400 (bad request) or 500 (server error) HTTP code."})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The service may not be implemented correctly or deviate from the OData standard / conventions."}),"\n",(0,o.jsxs)(n.p,{children:["Check the request being sent out (",(0,o.jsx)(n.a,{href:"./guides/logging-overview",children:"looking at HTTP logs"}),") against the ",(0,o.jsx)(n.a,{href:"https://www.odata.org/documentation/",children:"OData documentation"}),".\nIf the service deviates from OData conventions, try using the more ",(0,o.jsx)(n.a,{href:"./features/odata/generic-untyped-odata-client",children:"low-level generic OData client"})," which gives you more flexibility to adapt requests."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The SAP Cloud SDK may send an incorrect OData request."}),"\n",(0,o.jsxs)(n.p,{children:["Verify that the request the SAP Cloud SDK sends out (",(0,o.jsx)(n.a,{href:"./guides/logging-overview",children:"looking at HTTP logs"}),") does not conform to the ",(0,o.jsx)(n.a,{href:"https://www.odata.org/documentation/",children:"OData documentation"}),".\nIn that case please ",(0,o.jsx)(n.a,{href:"https://github.com/SAP/cloud-sdk-java/issues",children:"raise an issue on our GitHub"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In addition, you can leverage the ",(0,o.jsx)(n.a,{href:"./features/odata/generic-untyped-odata-client",children:"low-level generic OData client"})," which gives you more flexibility to adapt requests to overcome potential issues with the typed APIs."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"javalangillegalargumentexception-jclass-name-empty",children:(0,o.jsx)(n.code,{children:"java.lang.IllegalArgumentException: JClass name empty"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsxs)(n.p,{children:["While generating a type-safe API client for an OData service, you encounter the exception message ",(0,o.jsx)(n.code,{children:'"java.lang.IllegalArgumentException: JClass name empty"'}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The service specification (",(0,o.jsx)(n.code,{children:"EDMX"})," file) contains an entity that is named ",(0,o.jsx)(n.code,{children:"Type"}),", ",(0,o.jsx)(n.code,{children:"Type_"}),", or just ",(0,o.jsx)(n.code,{children:"_"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["By default, both the OData V2 and V4 VDM generators use the ",(0,o.jsx)(n.code,{children:"S4HanaNamingStrategy"})," to generate valid Java names from the given service specification.\nHereby, it removes pre- and suffixes that are commonly used in SAP service specifications, such as the suffixes ",(0,o.jsx)(n.code,{children:"Type"})," and ",(0,o.jsx)(n.code,{children:"_"})," for entities.\nIn special cases, where an entity name consist of those suffixes only, that logic leads to the generation of an empty class name, which, in turn, then results in the observed exception."]}),"\n",(0,o.jsxs)(n.p,{children:["To solve that issue, you can change the naming strategy used by the generator.\nThe SAP Cloud SDK additionally includes the ",(0,o.jsx)(n.code,{children:"com.sap.cloud.sdk.datamodel.odata.utility.SimpleNamingStrategy"})," out-of-the-box, which does not perform any unnecessary pre- and suffix removal."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"destinationaccessexception-failed-to-read-authentication-token-the-destination-service-responded-with-an-error-could-not-verify-the-provided-csrf-token-because-your-session-was-not-found",children:(0,o.jsx)(n.code,{children:"DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsxs)(n.p,{children:["When using a ",(0,o.jsx)(n.code,{children:"Destination"})," you encounter an exception message like ",(0,o.jsx)(n.code,{children:'"DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found"'}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The Destination Service on Cloud Foundry is unable to generate an authentication token that will be used in later requests.\nIn the service configuration, the destination entry references a token service endpoint that could not communicate correctly with the Destination Service."}),"\n",(0,o.jsxs)(n.p,{children:["To solve that issue, please check every field in the destination configuration for valid input.\nPlease find the official ",(0,o.jsx)(n.a,{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/42a0e6b966924f2e902090bdf435e1b2.html",children:"documentation from the Destination Service"}),' for more details.\nThe value for field "Token Service URL" may require the full service endpoint path, including e.g. ',(0,o.jsx)(n.code,{children:"/oauth/token"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"sslhandshakeexception-pkix-path-building-failed-sunsecurityprovidercertpathsuncertpathbuilderexception-unable-to-find-valid-certification-path-to-requested-target",children:(0,o.jsx)(n.code,{children:"SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsxs)(n.p,{children:["When accessing an On-Premise system from your local machine the HTTP client is unable to establish a secure connection to the target server.\nYou may experience the follow-up error message: ",(0,o.jsx)(n.code,{children:'"ODataConnectionException: Connection was aborted."'})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"To validate the SSL connection your Java runtime would need to check the chain of trusted certificates.\nPlease review your local Java trust store."}),"\n",(0,o.jsxs)(n.p,{children:["To solve the issue there are many tutorials on how to register certificates.\nHowever, if you require a quick solution for your local development environmment, you can add a special flag to your ",(0,o.jsx)(n.code,{children:'"destinations"'})," environment variable: ",(0,o.jsx)(n.code,{children:'"TrustAll" : "true"'}),".\nThis will disable the certificate validation on your local runtime."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"defaulthttpclientfactory-not-a-subtype-error",children:[(0,o.jsx)(n.code,{children:"DefaultHttpClientFactory not a subtype"})," Error"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsx)(n.p,{children:"Applications that rely on the SAP Java Buildpack, which is always true for application that require JCo, may throw the following exception when trying to access a RFC destination:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"java.util.ServiceConfigurationError: com.sap.cloud.security.client.HttpClientFactory: com.sap.cloud.security.client.DefaultHttpClientFactory not a subtype\n"})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This issue is typically caused by a dependency scope conflict and can be solved by following ",(0,o.jsx)(n.a,{href:"./guides/manage-dependencies#avoiding-scope-conflicts",children:"our guidance"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"incoming-requests-fail-because-a-request-header-is-too-large",children:"Incoming Requests Fail Because a Request Header is Too Large"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.strong,{children:"Symptoms"})}),(0,o.jsxs)(n.p,{children:["your app is responding with 400 codes and you see a log entry ",(0,o.jsx)(n.code,{children:"Request header is too large"})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In some cases you may need to configure your app/server to accept larger request headers.\nRefer to ",(0,o.jsx)(n.a,{href:"https://www.baeldung.com/spring-boot-max-http-header-size#overview-1",children:"this guide"})," on how to achieve this for Spring based applications.\nIn case you are deploying a WAR file with the SAP Java Buildpack refer to ",(0,o.jsx)(n.a,{href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/79c039ab43b946a7b50c5d0326a3b40b.html#customizing-the-sap-java-buildpack-defaults",children:"this documentation"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},5594:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(34164);const i={tabItem:"tabItem__kUE"};var s=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,r),hidden:t,children:n})}},91517:(e,n,t)=>{t.d(n,{A:()=>S});var o=t(96540),i=t(34164),s=t(23104),r=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:i}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),g=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(92303);const g={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=a[t].value;i!==o&&(c(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function S(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},11610:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(74848);const i=function(e){let{align:n}=e;return(0,o.jsx)("span",{className:n?"col text--right":"",children:(0,o.jsx)("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom",children:(0,o.jsx)("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);