"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[18157],{76650:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/logging","title":"Logging","description":"How the SAP Cloud SDK logs errors and exceptions","source":"@site/docs-js/features/logging.mdx","sourceDirName":"features","slug":"/features/logging","permalink":"/cloud-sdk/docs/js/features/logging","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/logging.mdx","tags":[],"version":"current","frontMatter":{"id":"logging","title":"Logging","sidebar_label":"Logging","description":"How the SAP Cloud SDK logs errors and exceptions","keywords":["sap","cloud","sdk","JavaScript","TypeScript","error","exception","logging"]},"sidebar":"docsJsSidebar","previous":{"title":"Error Handling","permalink":"/cloud-sdk/docs/js/features/error-handling"},"next":{"title":"Shared ESLint configuration","permalink":"/cloud-sdk/docs/js/features/eslint-configuration"}}');var r=n(74848),t=n(28453);const l={id:"logging",title:"Logging",sidebar_label:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","exception","logging"]},i=void 0,a={},c=[{value:"Creating a Logger",id:"creating-a-logger",level:2},{value:"Use a Logger",id:"use-a-logger",level:2},{value:"Logging Exceptions",id:"logging-exceptions",level:2},{value:"Exception Logger",id:"exception-logger",level:2},{value:"What Happens Under the Hood",id:"what-happens-under-the-hood",level:2}];function g(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"creating-a-logger",children:"Creating a Logger"}),"\n",(0,r.jsx)(o.p,{children:"The SAP Cloud SDK provides an easy way to create a logger:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"import { createLogger } from '@sap-cloud-sdk/util';\n\nconst myLogger = createLogger('my-message-context');\n"})}),"\n",(0,r.jsxs)(o.p,{children:["The string argument in the ",(0,r.jsx)(o.code,{children:"createLogger()"})," function is the identifier for the logger and you should use a separate message context for each logical part of your application.\nSince it is used to group messages or set the log level per context."]}),"\n",(0,r.jsx)(o.h2,{id:"use-a-logger",children:"Use a Logger"}),"\n",(0,r.jsx)(o.p,{children:"The logger provides the usual log methods:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"myLogger.debug('Here is some debug.');\nmyLogger.info('Here is some info.');\nmyLogger.warn('Here is a warning.');\nmyLogger.error('Here is a error.');\n"})}),"\n",(0,r.jsxs)(o.p,{children:["The log level can be set using the environment variable ",(0,r.jsx)(o.code,{children:"SAP_CLOUD_SDK_LOG_LEVEL"}),".\nYou can then create a logger as below:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"process.env.SAP_CLOUD_SDK_LOG_LEVEL = 'warn';\n\nconst myLogger = createLogger({\n  messageContext: 'my-message-context'\n});\n"})}),"\n",(0,r.jsx)(o.p,{children:"In the example above, the first two lines will not appear in the logs."}),"\n",(0,r.jsx)(o.p,{children:"You can set the log level either on creation:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"const myLogger = createLogger({\n  messageContext: 'my-message-context',\n  level: 'error'\n});\n"})}),"\n",(0,r.jsxs)(o.p,{children:["or later in you application via the ",(0,r.jsx)(o.code,{children:"setLogLevel()"})," method:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"setLogLevel('error', 'my-message-context');\n"})}),"\n",(0,r.jsx)(o.p,{children:"In the example above, the first three lines would not appear in the logs."}),"\n",(0,r.jsxs)(o.p,{children:["If none of the above methods are specified, the default value for the log level is ",(0,r.jsx)(o.code,{children:"info"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"logging-exceptions",children:"Logging Exceptions"}),"\n",(0,r.jsx)(o.p,{children:"In the example above a string was passed to the logging method:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"myLogger.info('Here is some info.');\n"})}),"\n",(0,r.jsx)(o.p,{children:"and in the logs, you would find a related entry:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"TimeStamp [INFO] my-message-context The message you provided.\n"})}),"\n",(0,r.jsxs)(o.p,{children:["However, you can also pass an error object also known as an exception to the log statement.\nIn this case, the log statement will contain only the message of the exception for all log functions except for ",(0,r.jsx)(o.code,{children:"error"}),".\nIf ",(0,r.jsx)(o.code,{children:"myLogger.error(err)"})," is called with an error object it will also log the stack trace:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"myLogger.error(new Error('Log this message and stack.')\n"})}),"\n",(0,r.jsx)(o.h2,{id:"exception-logger",children:"Exception Logger"}),"\n",(0,r.jsx)(o.p,{children:"The SAP Cloud SDK enables an exception logger once you create a logger instance somewhere in your project.\nThe exception logger logs unhandled exceptions as if you would log the error manually.\nIn other words, the exception logger does the following for you:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"try {\n  someMethodThrowing();\n} catch (err) {\n  logger.error(err);\n  throw err;\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:["You can disable this functionality with the ",(0,r.jsx)(o.code,{children:"disableExceptionLogger()"})," method."]}),"\n",(0,r.jsx)(o.h2,{id:"what-happens-under-the-hood",children:"What Happens Under the Hood"}),"\n",(0,r.jsxs)(o.p,{children:["The SAP Cloud SDK logger instances are based on ",(0,r.jsx)(o.a,{href:"https://github.com/winstonjs/winston",children:"winston"}),".\nA ",(0,r.jsx)(o.code,{children:"logger"})," instance is created from a central container that knows all existing loggers.\nVia the ",(0,r.jsx)(o.code,{children:"container"})," class, the SAP Cloud SDK provides methods per message context:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"getLogger('my-message-context'); // get logger if present\nsetLogLevel('error', 'my-message-context'); // set log level\nsetLogFormat(logFormat.kibana, 'my-message-context'); // set log format\n"})}),"\n",(0,r.jsx)(o.p,{children:"or global methods for all loggers:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"setGlobalLogLevel('warn'); // set the global log level to warn\nsetGlobalLogFormat(logFormat.kibana); // set the global log format to kibana\nsetGlobalTransports(new winston.transports.File(options)); // set the global transport to file\nmuteLoggers(); // mute all loggers completely\nunmuteLogger(); // unmute all loggers\n"})}),"\n",(0,r.jsxs)(o.p,{children:["The SAP Cloud SDK sets the log level ",(0,r.jsx)(o.strong,{children:"during the creation of a logger"})," based on the following order:"]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"log level set in the environment variable"}),": ",(0,r.jsx)(o.code,{children:"process.env.SAP_CLOUD_SDK_LOG_LEVEL = 'silly';"})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"log level for a specific message context or logger"}),": ",(0,r.jsx)(o.code,{children:"setLogLevel('info', messageContextOrLogger)"})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsxs)(o.strong,{children:[(0,r.jsx)(o.code,{children:"level"})," field in the ",(0,r.jsx)(o.code,{children:"createLogger()"})," function"]}),": ",(0,r.jsx)(o.code,{children:'createLogger({..., level: "info"})'})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"global log level"}),": ",(0,r.jsx)(o.code,{children:"setGlobalLogLevel('info')"})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"default log level"}),": ",(0,r.jsx)(o.code,{children:"info"})]}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["Please notice that the ",(0,r.jsx)(o.code,{children:"setGlobalLogLevel()"})," function will not only affect the creation of the next logger, but also the log level of all existing loggers."]})}),"\n",(0,r.jsx)(o.p,{children:"The SAP Cloud SDK sets the log format based on the following order of priority:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"log format for a specific message context or logger"}),": ",(0,r.jsx)(o.code,{children:"setLogFormat(logFormat.local, messageContextOrLogger)"})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsxs)(o.strong,{children:[(0,r.jsx)(o.code,{children:"format"})," field in the ",(0,r.jsx)(o.code,{children:"createLogger()"})," function"]}),": ",(0,r.jsx)(o.code,{children:"createLogger({..., format: logFormat.local})"})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"global log format"}),": ",(0,r.jsx)(o.code,{children:"setGlobalLogFormat(logFormat.local)"})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"default log format"}),": set ",(0,r.jsx)(o.code,{children:"NODE_ENV=production"})," to get ",(0,r.jsx)(o.code,{children:"kibana"}),", otherwise ",(0,r.jsx)(o.code,{children:"local"})]}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["Please notice that the ",(0,r.jsx)(o.code,{children:"setGlobalLogFormat()"})," method will not only affect the creation of the next logger, but also the log format of all existing loggers."]})}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"nodejs_buildpack"})," sets ",(0,r.jsx)(o.code,{children:"NODE_ENV=production"})," by default.\nTherefore, Node.js applications deployed on Cloud Foundry using ",(0,r.jsx)(o.code,{children:"nodejs_buildpack"})," has ",(0,r.jsx)(o.code,{children:"kibana"})," as the default log format."]})}),"\n",(0,r.jsxs)(o.p,{children:["In case you see a need for higher flexibility of the logging instance feel free to create an issue in the ",(0,r.jsx)(o.a,{href:"https://github.com/SAP/cloud-sdk-js",children:"SAP Cloud SDK repository"})," or make a contribution."]})]})}function d(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>i});var s=n(96540);const r={},t=s.createContext(r);function l(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);