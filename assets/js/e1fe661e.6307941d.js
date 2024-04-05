"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5444],{92957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var l=t(74848),r=t(28453),o=t(12976),a=t(5594);const s={id:"set-up-dev-environment",title:"Set up Development Environment",sidebar_label:"Set up Development Environment",description:"Set up your environment to use the SAP Cloud SDK for JavaScript.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},i=void 0,c={id:"tutorials/getting-started/set-up-dev-environment",title:"Set up Development Environment",description:"Set up your environment to use the SAP Cloud SDK for JavaScript.",source:"@site/docs-js/tutorials/getting-started/1-set-up-dev-environment.mdx",sourceDirName:"tutorials/getting-started",slug:"/tutorials/getting-started/set-up-dev-environment",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/set-up-dev-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/tutorials/getting-started/1-set-up-dev-environment.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"set-up-dev-environment",title:"Set up Development Environment",sidebar_label:"Set up Development Environment",description:"Set up your environment to use the SAP Cloud SDK for JavaScript.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},sidebar:"docsJsSidebar",previous:{title:"Introduction",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/introduction"},next:{title:"Execute an OData Request",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/execute-an-odata-request"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Node.js and npm",id:"nodejs-and-npm",level:2},{value:"Install Nest CLI",id:"install-nest-cli",level:2},{value:"Cloud Foundry Command Line Interface",id:"cloud-foundry-command-line-interface",level:2},{value:"Scaffold an Application",id:"scaffold-an-application",level:2},{value:"Get Familiar With the Project",id:"get-familiar-with-the-project",level:2},{value:"npm / Project",id:"npm--project",level:4},{value:"TypeScript",id:"typescript",level:4},{value:"Local Development",id:"local-development",level:4},{value:"Run the Project",id:"run-the-project",level:2},{value:"Final Code Review",id:"final-code-review",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(n.p,{children:"You will start with installing the tools necessary to get started.\nOnce your development environment is set up, you can begin with scaffolding an initial application with the NestJS CLI.\nThroughout this tutorial, you'll modify and extend this starter application to use the SAP Cloud SDK for JavaScript."}),"\n",(0,l.jsx)(n.p,{children:"In this part of the tutorial, you will do the following:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Install Node.js and npm."}),"\n",(0,l.jsx)(n.li,{children:"Install the Nest CLI."}),"\n",(0,l.jsx)(n.li,{children:"Install the Cloud Foundry CLI, cf."}),"\n",(0,l.jsx)(n.li,{children:"Scaffold your NestJS application and learn about the project's structure."}),"\n",(0,l.jsx)(n.li,{children:"Run the application locally."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"nodejs-and-npm",children:"Node.js and npm"}),"\n",(0,l.jsx)(n.p,{children:"If you have Node.js and npm installed, skip ahead to the next step.\nTo check the Node.js and npm versions you have installed, run the following commands:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"node -v\nnpm -v\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If one of those commands fails, you will have to install Node.js.\nIt is recommended to use the ",(0,l.jsx)(n.a,{href:"https://nodejs.org/en/about/releases/",children:"latest LTS version"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"install-nest-cli",children:"Install Nest CLI"}),"\n",(0,l.jsx)(n.p,{children:"You need to have the Nest CLI installed to create a new project.\nYou can install it globally by executing the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm i -g @nestjs/cli\n"})}),"\n",(0,l.jsx)(n.h2,{id:"cloud-foundry-command-line-interface",children:"Cloud Foundry Command Line Interface"}),"\n",(0,l.jsx)(n.p,{children:"You will need the Cloud Foundry CLI (cf) to later deploy your application to the SAP Business Technology Platform.\nTo see whether it is already installed, run the following:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"cf -v\n"})}),"\n",(0,l.jsx)(n.p,{children:"If the command fails, you will need to install cf."}),"\n",(0,l.jsxs)(n.p,{children:["You can find installation instructions for all common platforms in the ",(0,l.jsx)(n.a,{href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html",children:"Cloud Foundry documentation"}),".\nUsing a package manager for that is recommended.\nIf you are using Chocolatey on Windows, please find the instructions ",(0,l.jsx)(n.a,{href:"https://community.chocolatey.org/packages/cloudfoundry-cli",children:"here"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"scaffold-an-application",children:"Scaffold an Application"}),"\n",(0,l.jsx)(n.p,{children:"You can now create a new project using the command below:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"nest new <project-name>\n"})}),"\n",(0,l.jsx)(n.p,{children:'This will create an application that already contains all the files and configuration you need to use the SAP Cloud SDK for JavaScript.\nThe CLI will ask you to select a package manager.\nSelect "npm".\nThe CLI will then install all the necessary dependencies for the project, so this might take a minute.\nIf everything worked correctly, you should see an output like this:'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"\n\ud83d\ude80  Successfully created project <project-name>\n\ud83d\udc49  Get started with the following commands:\n\n$ cd <project-name>\n$ npm run start\n\n"})}),"\n",(0,l.jsx)(n.h2,{id:"get-familiar-with-the-project",children:"Get Familiar With the Project"}),"\n",(0,l.jsx)(n.p,{children:"The project contains the following files and folders:"}),"\n",(0,l.jsx)(n.h4,{id:"npm--project",children:"npm / Project"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"package.json"})}),": Specifies dependencies, metadata, and user-defined scripts.\nThe application comes with some predefined scripts and dependencies."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"typescript",children:"TypeScript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"tsconfig.json"})}),": Configuration file for TypeScript.\nThis is not needed in the plain JavaScript version."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"local-development",children:"Local Development"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"src/"})}),": Source code for the initial application."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"run-the-project",children:"Run the Project"}),"\n",(0,l.jsx)(n.p,{children:"To run the application locally, execute the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm run start:dev\n"})}),"\n",(0,l.jsxs)(n.p,{children:["This will start a local server in watch mode so that subsequent changes will automatically trigger a restart of the server.\nGo to ",(0,l.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),' and you should get a "Hello World!" in response.\nBefore continuing with the next part of the tutorial, open ',(0,l.jsx)(n.code,{children:"src/main.ts"})," and switch the port from 3000 to 8080.\nThis is required as the mock server (covered ",(0,l.jsx)(n.a,{href:"/cloud-sdk/docs/js/tutorials/getting-started/execute-an-odata-request#set-up-a-mock-server-optional",children:"later"}),") runs on port ",(0,l.jsx)(n.code,{children:"3000"}),".\nThe corresponding line should then look like this:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"await app.listen(process.env.PORT || 8080);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"final-code-review",children:"Final Code Review"}),"\n",(0,l.jsx)(n.p,{children:"In this tutorial, you installed the CLI tools necessary for creating and deploying your application and scaffolded an initial NestJS application."}),"\n",(0,l.jsx)(n.p,{children:"Here are the code files discussed on this page:"}),"\n",(0,l.jsxs)(o.A,{groupId:"code-files",defaultValue:"app-module",values:[{label:"src/main.ts",value:"main"},{label:"src/app.module.ts",value:"app-module"},{label:"src/app.controller.ts",value:"app-controller"},{label:"src/app.service.ts",value:"app-service"}],children:[(0,l.jsx)(a.A,{value:"main",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(process.env.PORT || 8080);\n}\nbootstrap();\n"})})}),(0,l.jsx)(a.A,{value:"app-module",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\n\n@Module({\n  imports: [],\n  controllers: [AppController],\n  providers: [AppService]\n})\nexport class AppModule {}\n"})})}),(0,l.jsx)(a.A,{value:"app-controller",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { Controller, Get } from '@nestjs/common';\nimport { AppService } from './app.service';\n\n@Controller()\nexport class AppController {\n  constructor(private readonly appService: AppService) {}\n\n  @Get()\n  getHello(): string {\n    return this.appService.getHello();\n  }\n}\n"})})}),(0,l.jsx)(a.A,{value:"app-service",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class AppService {\n  getHello(): string {\n    return 'Hello World!';\n  }\n}\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},5594:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var l=t(34164);const r={tabItem:"tabItem__kUE"};var o=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,a),hidden:t,children:n})}},12976:(e,n,t)=>{t.d(n,{A:()=>w});var l=t(96540),r=t(34164),o=t(22437),a=t(56347),s=t(205),i=t(39758),c=t(49535),d=t(75941);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:r}}=e;return{value:n,label:t,attributes:l,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,l.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=p(e),[a,i]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Dv)(t);return[r,(0,l.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),j=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{j&&i(j)}),[j]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=t(92303);const j={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:l,selectValue:a,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),r=s[t].value;r!==l&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function w(e){const n=(0,v.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var l=t(96540);const r={},o=l.createContext(r);function a(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);