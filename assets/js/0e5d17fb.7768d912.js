"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8011],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=s.createContext({}),c=function(e){var n=s.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return s.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,m=u["".concat(p,".").concat(h)]||u[h]||l[h]||a;return t?s.createElement(m,o(o({ref:n},d),{},{components:t})):s.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(87462),r=(t(67294),t(3905));const a={},o=void 0,i={unversionedId:"features/odata/common/batch/responses",id:"features/odata/common/batch/responses",title:"responses",description:"Once a batch request is executed, it returns a list of BatchResponses.",source:"@site/docs-js/features/odata/common/batch/responses.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/responses",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/responses",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[{value:"<code>ReadResponse</code>",id:"readresponse",level:3},{value:"<code>WriteResponses</code>",id:"writeresponses",level:3},{value:"<code>ErrorResponse</code>",id:"errorresponse",level:3}],d={toc:c};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once a ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," request is executed, it returns a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s.\nThe responses correspond to the retrieve requests and changesets in the same order that they were passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," function.\nRequests that were not successful are reflected as ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s.\nResponses to successful requests are represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadResponse"),"s for retrieve requests, and ",(0,r.kt)("inlineCode",{parentName:"p"},"WriteResponses")," for changesets."),(0,r.kt)("p",null,"To determine the type of a response, you can use the following type guards:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".isSuccess()")," - to check that the response is either a ",(0,r.kt)("inlineCode",{parentName:"li"},"ReadResponse")," or of type ",(0,r.kt)("inlineCode",{parentName:"li"},"WriteResponses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".isError()")," - to check that the response is an ",(0,r.kt)("inlineCode",{parentName:"li"},"ErrorResponse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".isReadResponse()")," - to check that the response is a ",(0,r.kt)("inlineCode",{parentName:"li"},"ReadResponse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".isWriteResponses()")," - to check that the response is either of type ",(0,r.kt)("inlineCode",{parentName:"li"},"WriteResponses"))),(0,r.kt)("p",null,"Then, depending on the corresponding request, you can parse the response or handle the error."),(0,r.kt)("h3",{id:"readresponse"},(0,r.kt)("inlineCode",{parentName:"h3"},"ReadResponse")),(0,r.kt)("p",null,"Successful retrieve requests have the type ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadResponse"),", which contains the HTTP code, the raw body, and the constructor of the entity that was parsed from the response.\nTo work with an instance of the retrieved entity, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw data into an instance of an entity represented by the given entity API.\nNote, that the ",(0,r.kt)("inlineCode",{parentName:"p"},".as")," method transforms the raw data to an array of entities, even if the original request was a ",(0,r.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),"."),(0,r.kt)("p",null,"In the example below, we combine a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),"s into one ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," request and execute it against a destination.\nIf one of the requests was unsuccessful, an error will be thrown.\nOtherwise, the responses are transformed into instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi } = businessPartnerService();\n\nasync function getAddressesByIds(\n  ...retrieveRequests: GetByKeyRequestBuilder<BusinessPartnerAddress>[]\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // Error handling\n  if (batchResponses.some(response => !response.isSuccess())) {\n    throw new Error('Some of the batch subrequests were not successful.');\n  }\n\n  return batchResponses.reduce(\n    (addresses: BusinessPartnerAddress[], response: BatchResponse) => {\n      if (response.isReadResponse()) {\n        // Transform response to an instance of BusinessPartnerAddress\n        const [address] = response.as(businessPartnerAddressApi);\n        addresses.push(address);\n      }\n      return addresses;\n    },\n    []\n  );\n}\n")),(0,r.kt)("h3",{id:"writeresponses"},(0,r.kt)("inlineCode",{parentName:"h3"},"WriteResponses")),(0,r.kt)("p",null,"Successful changeset requests can be cast to ",(0,r.kt)("inlineCode",{parentName:"p"},"WriteResponses")," which contains all subresponses for the changeset request.\nThose responses can be accessed by ",(0,r.kt)("inlineCode",{parentName:"p"},".responses")," and have the type ",(0,r.kt)("inlineCode",{parentName:"p"},"WriteResponse"),".\nEach ",(0,r.kt)("inlineCode",{parentName:"p"},"WriteResponse")," contains the HTTP code and can contain the raw body and the constructor of the entity that was parsed from the response, depending on whether there was a body in the response.\nCreate and delete requests typically do not have a response body.\nTo work with an instance of an entity given in a ",(0,r.kt)("inlineCode",{parentName:"p"},"WriteResponse"),", you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw string body into an instance of the given constructor.\nNote that the response may not exist, so you should only call this method if you know that there is data.\nTypically the HTTP code is a good indicator for this - ",(0,r.kt)("inlineCode",{parentName:"p"},"201 No Content")," probably won't have content.\nIf you are working with TypeScript you will have to tell the compiler, that the ",(0,r.kt)("inlineCode",{parentName:"p"},".as!")," method can be used here by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),".\nAlso note, that the response to a changeset can be an ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),".\nTherefore, it is crucial to check responses for success, before casting them to ",(0,r.kt)("inlineCode",{parentName:"p"},"WriteResponses"),"."),(0,r.kt)("p",null,"In the example below, we combine a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateRequestBuilder"),"s into one ",(0,r.kt)("inlineCode",{parentName:"p"},"changeset")," and pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," request, which we execute against a destination."),(0,r.kt)("p",null,"Once we execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," request, we get a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s, which contains one response only."),(0,r.kt)("p",null,"If the request was unsuccessful, an error will be thrown.\nOtherwise, the subresponses are transformed into instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi, changeset } =\n  businessPartnerService();\n\nasync function updateAddresses(\n  ...updateRequests: UpdateRequestBuilder<BusinessPartnerAddress>\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  if (changesetResponse.isWriteResponses()) {\n    return changesetResponse.responses.map(response =>\n      // Transform response to an instance of BusinessPartnerAddress\n      response.as!(BusinessPartnerAddress)\n    );\n  }\n\n  // Error handling\n  throw new Error('The changeset request was not successful.');\n}\n")),(0,r.kt)("h3",{id:"errorresponse"},(0,r.kt)("inlineCode",{parentName:"h3"},"ErrorResponse")),(0,r.kt)("p",null,"Unsuccessful retrieve requests and changesets are reflected as ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s in the response.\nThose responses have an ",(0,r.kt)("inlineCode",{parentName:"p"},"httpCode")," (a number) and a ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," (a JSON object)."))}l.isMDXComponent=!0}}]);