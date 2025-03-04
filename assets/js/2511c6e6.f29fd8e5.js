"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[50748],{41177:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"features/odata/common/entity/custom-de-serializers","title":"custom-de-serializers","description":"Since version 2 of the SAP Cloud SDK you can customize how the data you get from a service is deserialized and serialize when sending it back to the service.","source":"@site/docs-js_versioned_docs/version-v3/features/odata/common/entity/custom-de-serializers.mdx","sourceDirName":"features/odata/common/entity","slug":"/features/odata/common/entity/custom-de-serializers","permalink":"/cloud-sdk/docs/js/v3/features/odata/common/entity/custom-de-serializers","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v3/features/odata/common/entity/custom-de-serializers.mdx","tags":[],"version":"v3","frontMatter":{}}');var n=i(74848),t=i(28453);const a={},o=void 0,l={},d=[{value:"Using (De-)Serializers for Temporal",id:"using-de-serializers-for-temporal",level:4}];function c(e){const s={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Since version 2 of the SAP Cloud SDK you can customize how the data you get from a service is ",(0,n.jsx)(s.em,{children:"deserialized"})," and ",(0,n.jsx)(s.em,{children:"serialize"})," when sending it back to the service."]}),"\n",(0,n.jsx)(s.p,{children:"To influence (de-)serialization you have to provide your custom (de-)serializers to a service."}),"\n",(0,n.jsxs)(s.p,{children:["A (de-)serializer is an object of type ",(0,n.jsx)(s.code,{children:"DeSerializer"})," that defines the following callback functions:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"deserialize()"}),": Takes a value as given by the service and returns a deserialized value, i.e. its represenation in code."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"serialize()"}),": Takes a deserialized value and transforms it to the format and type expected by the service."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"serializeToUri()"})," (optional): For some EDM types the serialized format differs between values in a payload and URI.\nThis function takes a deserialized value and transforms it to a string with the format expected by the service for URIs.\nThe second parameter of this callback function references the ",(0,n.jsx)(s.code,{children:"serialize()"})," function, which can optionally be used as a basis for URI serialization.\nIf this function is not specified, the URI serialization defaults to the ",(0,n.jsx)(s.code,{children:"serialize()"})," function."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The type ",(0,n.jsx)(s.code,{children:"DeSerializer"})," has one generic parameter, that represents the deserialized type."]}),"\n",(0,n.jsx)(s.p,{children:"Example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const doubleDeSerializer: DeSerializer<number> = {\n  deserialize: (val: string) => Number(val),\n  serialize: (val: number) => val.toString(),\n  serializeToUri: (value, serialize) => `${serialize(value)}D`\n};\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The example above shows a simplified version of the SAP Cloud SDK default (de-)serializer for the EDM type ",(0,n.jsx)(s.code,{children:"Edm.Double"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"deserialize()"})," function converts the raw value to a number."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"serialize()"})," function converts the deserialized value to a string."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"serializeToUri()"})," function makes use of the ",(0,n.jsx)(s.code,{children:"serialize()"})," function and appends a ",(0,n.jsx)(s.code,{children:"D"})," at the end of the string."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To specify custom (de-)serializers for a service, you have to pass an object to the service function, that maps from EDM type(s) to your custom (de-)serializer.\nAll unspecified EDM types are still (de-)serialized using the SAP Cloud SDK defaults."}),"\n",(0,n.jsxs)(s.p,{children:["Example, using the above ",(0,n.jsx)(s.code,{children:"doubleDeSerializer"})," for the business partner service:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const customDeSerializers = { 'Edm.Double': doubleDeSerializer };\nconst { businessPartnerApi } = businessPartnerService(customDeSerializers);\n"})}),"\n",(0,n.jsxs)(s.p,{children:["All requests against the ",(0,n.jsx)(s.code,{children:"businessPartnerApi"})," will now use the custom (de-)serializers for ",(0,n.jsx)(s.code,{children:"Edm.Double"})," and the default (de-)serializers for all other EDM types."]}),"\n",(0,n.jsx)(s.h4,{id:"using-de-serializers-for-temporal",children:"Using (De-)Serializers for Temporal"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://tc39.es/proposal-temporal/docs/",children:"Temporal"})," is a stage 3 proposal for a date/time API in ECMAScript.\nAt the time, there is polyfill available, but it is not recommended for productive use.\nOnce it is recommended for productive use, the SAP Cloud SDK will adapt it as the default over Moment.js.\nTemporal-based (de-)serializers for the SAP Cloud SDK are available as a separate npm package, ",(0,n.jsx)(s.code,{children:"@sap-cloud-sdk/temporal-de-serializers"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Adapt your code to use this package, for example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"import { temporalDeSerializersV2 } from '@sap-cloud-sdk/temporal-de-serializers';\nconst { businessPartnerApi } = businessPartnerService(temporalDeSerializersV2);\n\nbusinessPartnerApi\n  .entityBuilder()\n  .organizationFoundationDate(\n    Temporal.PlainDateTime.from('1995-12-07T03:24:30')\n  )\n  .build();\n"})})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var r=i(96540);const n={},t=r.createContext(n);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);