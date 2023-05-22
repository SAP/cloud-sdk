"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"generate-client",title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},l=void 0,o={unversionedId:"features/odata/generate-client",id:"features/odata/generate-client",title:"Generate an OData client for JavaScript",description:"The OData client generator allows you to generate custom OData client libraries for OData services.",source:"@site/docs-js/features/odata/generate-odata-client.mdx",sourceDirName:"features/odata",slug:"/features/odata/generate-client",permalink:"/cloud-sdk/docs/js/features/odata/generate-client",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/generate-odata-client.mdx",tags:[],version:"current",frontMatter:{id:"generate-client",title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},sidebar:"docsJsSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/js/features/odata/overview"},next:{title:"Execute an OData request",permalink:"/cloud-sdk/docs/js/features/odata/execute-request"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Generate a Client Using the Command Line Interface",id:"generate-a-client-using-the-command-line-interface",level:2},{value:"Options",id:"options",level:2},{value:"Generate a Client Programmatically",id:"generate-a-client-programmatically",level:2},{value:"npm Packages Versus Local Clients",id:"npm-packages-versus-local-clients",level:2},{value:"Transpilation",id:"transpilation",level:2},{value:"Prettier",id:"prettier",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The OData client generator allows you to generate custom OData client libraries for OData services.\nYou can then access these services from your code using the client libraries."),(0,r.kt)("p",null,"You can use the SAP Cloud SDK generator both as a command-line interface (CLI) and programmatically."),(0,r.kt)("p",null,"All you need to use is a service metadata specification in the EDMX format (file ending can be ",(0,r.kt)("inlineCode",{parentName:"p"},".edmx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".xml"),")."),(0,r.kt)("p",null,"Check this ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/guides/api-business-hub-download-specification"},"guide")," for downloading a specification from SAP Business Accelerator Hub."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Run this command in your project's terminal to install the generator as a development dependency`:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @sap-cloud-sdk/generator\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to install the generator as a local dependency, because global installations hide the used generator version and cause problems when transpiling to JavaScript.\nIf you must use a globally installed generator, install the",(0,r.kt)("inlineCode",{parentName:"p"},"@types/node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v2")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v4")," package in your project to make the transpilation work.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#transpilation"},"Transpilation")," for more details.\nIf you need to transpile sources without any local ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", you must manually execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsc")," compiler with a custom ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"},"path mapping"),".")),(0,r.kt)("h2",{id:"generate-a-client-using-the-command-line-interface"},"Generate a Client Using the Command Line Interface"),(0,r.kt)("p",null,"The SAP Cloud SDK generator is primarily intended to be used on the command line."),(0,r.kt)("p",null,"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx generate-odata-client --input path/to/your/service-specifications --outputDir path/to/store/generated/modules\n")),(0,r.kt)("p",null,"Adapt the ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/your/service-specifications")," to the directory containing your service specifications in EDMX format, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"service-specifications/"),".\nAlso adapt ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/store/generated/modules")," to your OData client directory for example ",(0,r.kt)("inlineCode",{parentName:"p"},"odata-client"),".\nThis will generate OData clients for all your service specifications."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"options-per-service.json")," file is created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--optionsPerService")," option."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When set to a directory path, an ",(0,r.kt)("inlineCode",{parentName:"li"},"options-per-service.json")," file is read from or created in the given directory."),(0,r.kt)("li",{parentName:"ul"},"When set to a file path, the file is read or created with the given name.")),(0,r.kt)("p",null,"This file is used for customizing subdirectory naming and contains a mapping from the original file name to the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directoryName"),": the name of the subdirectory the client code will be generated into."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packageName"),": the name of the npm package, if a ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file is generated.\nThis information is optional."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"basePath"),": the URL path to be prepended before every request (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"'/sap/opu/odata/sap/'")," for SAP S/4HANA services).\nThe SDK will try to determine this value from either the EDMX or Swagger file.\nHowever, if automatic determination fails, client generation will also fail.\nIn that case, to generate a client successfully, you can do either of the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Manually specify the ",(0,r.kt)("inlineCode",{parentName:"li"},"basePath")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"options-per-service.json")," file and re-generate the client, or"),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"--skipValidation")," option to true, in which case, the SDK will set the ",(0,r.kt)("inlineCode",{parentName:"li"},"basePath")," value to ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," and log a warning message.")))),(0,r.kt)("p",null,"This information can be adjusted manually and ensure that every run of the generator produces the same names for the generation."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "path/to/your/service-specifications/MyService.edmx": {\n    "directoryName": "my-service",\n    "basePath": "/odata/v2",\n    "packageName": "my-service"\n  }\n}\n')),(0,r.kt)("p",null,"By default, the generated module contains the following sources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TypeScript code (",(0,r.kt)("inlineCode",{parentName:"li"},".ts"),") representing request builders, entity representations, and if needed representations for complex types as well as function/action imports."),(0,r.kt)("li",{parentName:"ul"},"All of the above as transpiled sources, including JavaScript sources (",(0,r.kt)("inlineCode",{parentName:"li"},".js"),"), type definition files (",(0,r.kt)("inlineCode",{parentName:"li"},".d.ts"),"), and sourcemap files (",(0,r.kt)("inlineCode",{parentName:"li"},".js.map"),")."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},".npmrc"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"typedoc.json"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),".")),(0,r.kt)("p",null,"The generation always includes the TypeScript sources.\nAll other files can be excluded from the generation - see the options below."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"generate-odata-client --help")," for additional options."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option ",(0,r.kt)("div",{style:{width:"225px"}})),(0,r.kt)("th",{parentName:"tr",align:"center"},"\xa0Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-i"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--input")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Specify the path to the directory or file containing the OData service definition(s) to generate clients for. Accepts definitions as XML and EDMX files. Throws an error if the path does not exist."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-o"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--outputDir")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Directory to save the generated code in."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--optionsPerService")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Set the path to a file containing the options per service. The configuration allows to set a ",(0,r.kt)("inlineCode",{parentName:"td"},"directoryName")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"packageName")," for every service, identified by the path to the original file. It also makes sure that names do not change between generator runs. If a directory is passed, an ",(0,r.kt)("inlineCode",{parentName:"td"},"options-per-service.json")," file is read/created in this directory."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--overwrite")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Exit when encountering a file that already exists. When set to true, it will be overwritten instead. Please note that compared to the ",(0,r.kt)("inlineCode",{parentName:"td"},"--clearOutputDir")," option, this will not delete outdated files."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--clearOutputDir")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Deletes EVERYTHING in the specified output directory before generating code."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--generateTypedocJson")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Generates a ",(0,r.kt)("inlineCode",{parentName:"td"},"typedoc.json"),' file for each package, used for the corresponding "doc" npm script.'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--packageJson")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Generate a ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json")," file, specifying dependencies and scripts for compiling and generating documentation."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--include")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"''")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Glob describing additional files to be added to the each generated service directory - relative to ",(0,r.kt)("inlineCode",{parentName:"td"},"input"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-t"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--transpile")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Transpile the generated TypeScript code. When enabled, a default ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," will be generated and used. It emits ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js.map")," and ",(0,r.kt)("inlineCode",{parentName:"td"},".d.ts")," files. To configure transpilation set ",(0,r.kt)("inlineCode",{parentName:"td"},"--tsconfig"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--tsconfig")),(0,r.kt)("td",{parentName:"tr",align:"center"},"default tsconfig"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Replace the default ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," by passing a path to a custom configuration. By default, a ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," is only generated when transpilation is enabled (",(0,r.kt)("inlineCode",{parentName:"td"},"--transpile"),"). If a directory is passed, a ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file is read from this directory."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--transpilationProcesses")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"16")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Number of processes used for transpilation of JavaScript files."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-p"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--prettierConfig")),(0,r.kt)("td",{parentName:"tr",align:"center"},"default prettier config"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Configuration file for prettier if you want to change the default value."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0By default, only errors, warnings and important info logs will be displayed. If set to true, all logs will be displayed."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--skipValidation")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Generation will stop if objects need renaming due to non-unique conditions or conflicts with certain SDK reserved keywords (e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Entity"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Service"),", etc.). If you enable this option, conflicts are resolved by appending postfixes like '","_","1'\""),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-c"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--config")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the path to the file containing the options for generation. If other flags are used, they overwrite the options set in the configuration file. If a directory is passed, a ",(0,r.kt)("inlineCode",{parentName:"td"},"config.json")," file is read from this directory."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"generate-a-client-programmatically"},"Generate a Client Programmatically"),(0,r.kt)("p",null,"You can also use the generator programmatically.\nYou will have to provide the options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { generate } from '@sap-cloud-sdk/generator';\n\n// Create your options, adapt the input & output directory as well as the package name according to your setup.\nconst input = 'service-specifications';\nconst outputDir = 'odata-client';\n\n// Create your project datastructure with all sourcefiles based on your options\nconst generatorConfig = {\n  overwrite: true,\n  transpile: false,\n  readme: false,\n  clearOutputDir: true,\n  generateTypedocJson: false,\n  packageJson: false\n  /* optional:\n    optionsPerService: 'test/directory',\n    include: 'glob of files to include'\n  */\n};\n\n// generate your project, you can also redefine options\ngenerate({\n  ...generatorConfig,\n  input,\n  outputDir\n});\n")),(0,r.kt)("h2",{id:"npm-packages-versus-local-clients"},"npm Packages Versus Local Clients"),(0,r.kt)("p",null,"The SAP Cloud SDK OData client generator generates TypeScript code.\nBy default, it creates only the TypeScript sources."),(0,r.kt)("p",null,"If you want to use the generated client in your TypeScript code without sharing it, you can work with the default configuration.\nIf you work with JavaScript, you can enable and configure transpilation with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--transpile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--tsconfig")," flags."),(0,r.kt)("p",null,"If you want to publish a generated client to an npm registry, in addition to transpiling, you will need a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file for the client.\nYou can generate it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--packageJson")," flag or include a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--include")," flag.\nMake sure to check intellectual property regulations before publishing to a public registry."),(0,r.kt)("p",null,"The generated clients depend on the ",(0,r.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v2")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v4")," packages, depending on the OData version of the service.\nYou have to make sure there is a local reference to these packages by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sap-cloud-sdk/odata-v2\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sap-cloud-sdk/odata-v4\n")),(0,r.kt)("p",null,"respectively."),(0,r.kt)("h2",{id:"transpilation"},"Transpilation"),(0,r.kt)("p",null,"If you installed the generator globally and want to transpile the generated code, you have to install the required dependency (or ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependency"),") for your client (",(0,r.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk/odata-v2")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk/odata-v4"),") prior to generation.\nYou do this by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @sap-cloud-sdk/odata-v2\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @sap-cloud-sdk/odata-v4\n")),(0,r.kt)("p",null,"respectively."),(0,r.kt)("p",null,"If you installed the generator as a ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependency"),", transpilation will work without additional steps."),(0,r.kt)("h2",{id:"prettier"},"Prettier"),(0,r.kt)("p",null,"Since version 2.11.0, the SAP Cloud SDK runs prettier on the generated sources using a default prettier config.\nThe prettier formats only TypeScript files (",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts"),") to avoid broken source maps.\nIf you are not happy with the configuration, you can provide a custom configuration using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--prettierConfig")," command line argument.\nNote that this formatting is done in-memory before the generator emits the files, so no expensive additional I/O is required.\nAlternatively, you can execute a custom formatting step after the generation is finished."),(0,r.kt)("p",null,"Note that custom formatting steps could break source maps when you generate a JavaScript client (option ",(0,r.kt)("inlineCode",{parentName:"p"},"--transpile")," enabled).\nThe generated ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".map.js")," files are not meant for humans to read and should be excluded from formatting."))}c.isMDXComponent=!0}}]);