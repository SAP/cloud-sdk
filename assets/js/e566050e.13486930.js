"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[70205],{91987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"features/connectivity/http-client","title":"Perform HTTP Requests","description":"How to use the generic http client for untyped requests","source":"@site/docs-js/features/connectivity/generic-http-client.mdx","sourceDirName":"features/connectivity","slug":"/features/connectivity/http-client","permalink":"/cloud-sdk/docs/js/features/connectivity/http-client","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/connectivity/generic-http-client.mdx","tags":[],"version":"current","frontMatter":{"id":"http-client","title":"Perform HTTP Requests","sidebar_label":"Perform HTTP Requests","description":"How to use the generic http client for untyped requests","keywords":["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},"sidebar":"docsJsSidebar","previous":{"title":"Proxies","permalink":"/cloud-sdk/docs/js/features/connectivity/proxies"},"next":{"title":"CSRF Fetching","permalink":"/cloud-sdk/docs/js/features/connectivity/csrf"}}');var i=t(74848),r=t(28453);const o={id:"http-client",title:"Perform HTTP Requests",sidebar_label:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},c=void 0,a={},d=[{value:"When to Use What?",id:"when-to-use-what",level:2},{value:"<code>executeHttpRequest</code>",id:"executehttprequest",level:2},{value:"Parameter Encoding",id:"parameter-encoding",level:3},{value:"Customized Parameter Encoding",id:"customized-parameter-encoding",level:4},{value:"Setting Middlewares",id:"setting-middlewares",level:3},{value:"CSRF Token Fetching",id:"csrf-token-fetching",level:3},{value:"<code>executeHttpRequestWithOrigin()</code>",id:"executehttprequestwithorigin",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This guide explains how to execute arbitrary HTTP requests using the SAP Cloud SDK for JavaScript.\nThe HTTP client provided by the SAP Cloud SDK provides some convenience features which are explained in detail in this guide."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you want to use an OData API, please refer to the ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/features/odata/execute-request",children:"Executing a request using a generated OData client"})," page.\nIn case you want to use an OpenAPI client, please refer to the ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/features/openapi/execute-request",children:"Execute a Request Using a Generated OpenAPI Client"})," page."]})}),"\n",(0,i.jsx)(n.h2,{id:"when-to-use-what",children:"When to Use What?"}),"\n",(0,i.jsxs)(n.p,{children:["The SAP Cloud SDK for JavaScript can generate clients for ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/features/odata/execute-request",children:"OData"})," and ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/features/openapi/execute-request",children:"OpenAPI"}),".\nUse generated clients for OData or OpenAPI services, if possible."]}),"\n",(0,i.jsx)(n.p,{children:"Generated clients provide convenience features such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Type-safe response objects"}),"\n",(0,i.jsx)(n.li,{children:"Convenient handling of filter, select and expand conditions"}),"\n",(0,i.jsxs)(n.li,{children:["Built-in ",(0,i.jsx)(n.code,{children:"ETag"})," versions handling"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Be sure to check if the clients for OData or OpenAPI support your use case.\nFor example, the OData client does not support the ",(0,i.jsx)(n.code,{children:"upsert"})," operation."]})}),"\n",(0,i.jsxs)(n.p,{children:["The generic HTTP client is based on the open source ",(0,i.jsx)(n.a,{href:"https://axios-http.com",children:"axios HTTP client"}),", but provides convenience features which are specific to working on SAP Business Technology Platform, such as:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/features/connectivity/destinations",children:"Destination lookup"})}),"\n",(0,i.jsxs)(n.li,{children:["Connections to ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/features/connectivity/on-premise",children:"SAP S/4HANA On-Premise"})," via the connectivity service"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/features/connectivity/proxies",children:"Web proxies"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"executehttprequest",children:(0,i.jsx)(n.code,{children:"executeHttpRequest"})}),"\n",(0,i.jsxs)(n.p,{children:["The most basic way to use the SAP Cloud SDK HTTP client is the function ",(0,i.jsx)(n.a,{href:"pathname:///api/v3/functions/sap_cloud_sdk_http_client.executeHttpRequest.html",children:"executeHttpRequest"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"executeHttpRequest(destination, requestConfig, httpRequestOptions): Promise<HttpResponse>;\n"})}),"\n",(0,i.jsx)(n.p,{children:"It takes the following parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"destination"})," argument is of type ",(0,i.jsx)(n.code,{children:"DestinationOrFetchOptions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This can either be a ",(0,i.jsx)(n.a,{href:"pathname:///api/v3/interfaces/sap_cloud_sdk_connectivity.Destination.html",children:"destination object"})," which was already fetched or an ",(0,i.jsx)(n.a,{href:"pathname:///api/v3/interfaces/sap_cloud_sdk_connectivity.DestinationFetchOptions.html",children:"object containing a destination name and an optional JWT"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"requestConfig"})," argument is of type ",(0,i.jsx)(n.a,{href:"pathname:///api/v3/types/sap_cloud_sdk_http_client.HttpRequestConfig.html",children:"HttpRequestConfig"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This parameter is optional"}),"\n",(0,i.jsxs)(n.li,{children:["The default value is a ",(0,i.jsx)(n.code,{children:"GET"})," request"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"httpRequestOptions"})," argument is of type ",(0,i.jsx)(n.code,{children:"HttpRequestOptions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This parameter is optional"}),"\n",(0,i.jsxs)(n.li,{children:["The default value is a request with ",(0,i.jsx)(n.a,{href:"#csrf-token-fetching",children:"automatic CSRF token fetching"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["This guide provides code snippets.\nFully executable example code can be found in the ",(0,i.jsx)(n.a,{href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/http-client-examples",children:"SAP-samples/cloud-sdk-js repository on GitHub"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"In the most simple form, the function can be invoked like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const response = await executeHttpRequest({\n  url: 'https://example.com'\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, since the ",(0,i.jsx)(n.code,{children:"requestConfig"})," value is not provided, the SDK treats it as a ",(0,i.jsx)(n.code,{children:"GET"})," request.\nTo perform a different operation, set the ",(0,i.jsx)(n.code,{children:"method"})," property in ",(0,i.jsx)(n.code,{children:"requestConfig"})," to the required value, e.g., ",(0,i.jsx)(n.code,{children:"POST"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Note that the ",(0,i.jsx)(n.code,{children:"destination"})," and ",(0,i.jsx)(n.code,{children:"requestConfig"})," parameters have an overlap in the keys they accept.\nFor example, both have a ",(0,i.jsx)(n.code,{children:"url"})," and an ",(0,i.jsx)(n.code,{children:"authorization"})," property.\nFor keys that exist for both objects, the ",(0,i.jsx)(n.code,{children:"requestConfig"})," takes precedence."]})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"executeHttpRequest()"})," function returns a promise of type ",(0,i.jsx)(n.a,{href:"pathname:///api/v3/interfaces/sap_cloud_sdk_http_client.HttpResponse.html",children:"HttpResponse"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"parameter-encoding",children:"Parameter Encoding"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Percent-encoding",children:"URL encoding"})," allows using characters as part of the URL which normally would cause issues such as spaces.\nFor example, the space character is replaced with ",(0,i.jsx)(n.code,{children:"%20"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The HTTP client automatically takes care of encoding parameters except for ",(0,i.jsx)(n.em,{children:"custom parameters"}),".\nCustom parameters can be useful when you need control exactly how values are transmitted to the backend system."]}),"\n",(0,i.jsx)(n.h4,{id:"customized-parameter-encoding",children:"Customized Parameter Encoding"}),"\n",(0,i.jsx)(n.p,{children:"If you need to customize parameter encoding, you can provide your own function to do the transformation.\nThis feature is meant for cases where backends have special requirements for the encoding that don't work with the default URL-encoding done by the HTTP client.\nYou should usually avoid this as it adds additional complexity to the application code."}),"\n",(0,i.jsx)(n.p,{children:"The example below shows how to do a string replace:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const myCustomParameterEncodingFunction: ParameterEncoder = function (\n  params: Record<string, any>\n): Record<string, any> {\n  const encodedParams: Record<string, any> = {};\n\n  for (const key in params) {\n    // Customize your required encoding logic here\n    encodedParams[key] = params[key].toString().replace('x', 'y');\n  }\n\n  return encodedParams;\n};\n\nconst response = await executeHttpRequest(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get',\n    params: {\n      param1: 'a/bx',\n      param2: 'x1'\n    },\n    // Pass your custom encoding function\n    parameterEncoder: myCustomParameterEncodingFunction\n  }\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"setting-middlewares",children:"Setting Middlewares"}),"\n",(0,i.jsxs)(n.p,{children:["You can specify middlewares for a request via the ",(0,i.jsx)(n.code,{children:"middleware"})," property of the request config"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const response = await executeHttpRequest(httpsDestination, {\n  middleware: [myMiddleware],\n  method: 'get'\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Middleware is a general concept used to add ",(0,i.jsx)(n.a,{href:"../middleware",children:"arbitrary enhancements to the request"}),".\nA typical use case is to also add ",(0,i.jsx)(n.a,{href:"../../guides/resilience",children:"resilience"})," to requests."]}),"\n",(0,i.jsxs)(n.p,{children:["The HTTP request in this example will contain the parameter values ",(0,i.jsx)(n.code,{children:"a/by"})," and ",(0,i.jsx)(n.code,{children:"y1"})," because the parameter encoder function replaced the ",(0,i.jsx)(n.code,{children:"x"})," with a ",(0,i.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"csrf-token-fetching",children:"CSRF Token Fetching"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",children:"Cross-Site Request Forgery (CSRF)"})," is a common type of attack on web applications.\nThe HTTP client provided by SAP Cloud SDK allows to automatically retrieve a CSRF token for HTTP APIs which support this."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Fetching CSRF token is automatically enabled for all requests that typically might change data, such as ",(0,i.jsx)(n.code,{children:"PUT"}),", ",(0,i.jsx)(n.code,{children:"POST"}),", ",(0,i.jsx)(n.code,{children:"DELETE"}),", or ",(0,i.jsx)(n.code,{children:"PATCH"})," requests.\nIt is not available for ",(0,i.jsx)(n.code,{children:"GET"})," requests."]})}),"\n",(0,i.jsxs)(n.p,{children:["Fetching the CSRF token can be enabled or disabled via the ",(0,i.jsx)(n.code,{children:"httpRequestOptions.fetchCsrfToken"})," parameter of ",(0,i.jsx)(n.code,{children:"executeHttpRequest()"})," function.\nSee its ",(0,i.jsx)(n.a,{href:"pathname:///api/v3/interfaces/sap_cloud_sdk_http_client.HttpRequestOptions.html",children:"API documentation"})," for details."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, to avoid CSRF token fetching when doing a ",(0,i.jsx)(n.code,{children:"PUT"}),", ",(0,i.jsx)(n.code,{children:"POST"}),", ",(0,i.jsx)(n.code,{children:"DELETE"}),", or ",(0,i.jsx)(n.code,{children:"PATCH"})," request, disable it like in this example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const response = await executeHttpRequest(\n  {\n    url: `https://example.com`\n  },\n  {\n    method: 'post'\n  },\n  {\n    fetchCsrfToken: false\n  }\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to adjust the way CSRF token are fetched, you can do so by using the ",(0,i.jsx)(n.a,{href:"../middleware",children:"middlewares"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Disable the token fetching to deactivate the default code"}),"\n",(0,i.jsx)(n.li,{children:"Add a middleware to include your custom token fetching."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The SAP Cloud SDK offers a ",(0,i.jsx)(n.code,{children:"csrf"})," middleware which allows to configure some basic options:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"method"})," The HTTP method used to get a token"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"URL"})," The URL which is called to retrieve a token"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"middleware"})," Middlewares used for the token retrieval request"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const response = await executeHttpRequest(\n  {\n    url: `https://example.com`\n  },\n  {\n    method: 'post',\n    middleware: [csrf({ url: 'https://example.com/csrf/token/url' })]\n  },\n  {\n    fetchCsrfToken: false\n  }\n);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"executehttprequestwithorigin",children:(0,i.jsx)(n.code,{children:"executeHttpRequestWithOrigin()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"executeHttpRequestWithOrigin()"})," function is a variation of ",(0,i.jsx)(n.code,{children:"executeHttpRequest()"})," which allows more fine-grained control over configuration precedence."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:['The term "origin" as it is used in the context of this guide does ',(0,i.jsx)(n.strong,{children:"not"})," refer to ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin",children:'a URL as in the "same-origin policy"'}),".\nInstead it refers to the ",(0,i.jsx)(n.em,{children:"origin"})," or ",(0,i.jsx)(n.em,{children:"source"})," of HTTP client configuration."]})}),"\n",(0,i.jsx)(n.p,{children:"This function may be helpful in situations where you want to define the priority of headers and parameters, for example if:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You want to enforce a hard-coded API key or JWT and ignore the ones from the destination"}),"\n",(0,i.jsx)(n.li,{children:"You want a default query parameter, which can be overwritten by the destination properties"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Headers and query parameters with the same name are prioritized in the following order:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"custom"})}),"\n",(0,i.jsx)(n.li,{children:"Destination related headers/query parameters"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"requestConfig"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this example the HTTP request will contain the URL parameter ",(0,i.jsx)(n.code,{children:"myParam"})," with the value ",(0,i.jsx)(n.code,{children:"custom-param"})," and the HTTP header ",(0,i.jsx)(n.code,{children:"apiKey"})," with the value ",(0,i.jsx)(n.code,{children:"custom-header"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const response = await executeHttpRequestWithOrigin(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get',\n    headers: {\n      custom: { apiKey: 'custom-header' },\n      requestConfig: { apiKey: 'default-header' }\n    },\n    params: {\n      custom: { myParam: 'custom-param' },\n      requestConfig: { myParam: 'default-param' }\n    }\n  }\n);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);