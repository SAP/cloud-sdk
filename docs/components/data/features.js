const baseUrl = '/cloud-sdk/docs';

export const features = [
  {
    name:
      '[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)',
    category: 'Legacy',
    java: {
      status: ':heavy_check_mark:',
      docsLink: ``,
      note: ''
    },
    js: {
      status: ':x:',
      docsLink: ``,
      note:
        'Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)'
    }
  },
  {
    name:
      '[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)',
    category: 'Legacy',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/bapi-and-rfc/bapi-and-rfc-overview/)`,
      note: ''
    },
    js: {
      status: ':x:',
      docsLink: ``,
      note:
        'Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)'
    }
  },
  {
    name:
      '[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)',
    category: 'Legacy',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/bapi-and-rfc/bapi-and-rfc-overview/)`,
      note: ''
    },
    js: {
      status: ':x:',
      docsLink: ``,
      note:
        'Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)'
    }
  },
  {
    name: '[OData v2](https://www.odata.org/documentation/odata-version-2-0/)',
    category: 'OData',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java)`,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript)`,
      note: ''
    }
  },
  {
    name: '[OData v4 type-safe client](https://www.odata.org/documentation/)',
    category: 'OData',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java)`,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)`,
      note: ''
    }
  },
  {
    name: '[OData code generator](https://www.odata.org/documentation/)',
    category: 'OData',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java)`,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/odata/generate-odata-client)`,
      note: ''
    }
  },
  {
    name: '[OData v4 type-safe client](https://www.odata.org/documentation/)',
    category: 'OData',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java)`,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)`,
      note: ''
    }
  },
  {
    name: 'OpenAPI 2.0',
    category: 'OpenAPI',
    java: {
      status: ':bulb:',
      docsLink: `[docs](${baseUrl}/java/features/rest/overview)`,
      note: ''
    },
    js: {
      status: ':bulb:',
      docsLink: `[docs](${baseUrl}/js/features/openapi/execute-openapi-request)`,
      note: ''
    }
  },
  {
    name: 'OpenAPI 3.0',
    category: 'OpenAPI',
    java: {
      status: ':bulb:',
      docsLink: `[docs](${baseUrl}/java/features/rest/overview)`,
      note: ''
    },
    js: {
      status: ':bulb:',
      docsLink: `[docs](${baseUrl}/js/features/openapi/execute-openapi-request)`,
      note: ''
    }
  },
  {
    name: 'OpenAPI code generator',
    category: 'OpenAPI',
    java: {
      status: ':bulb:',
      docsLink: `[docs](${baseUrl}/java/features/rest/generate-rest-client)`,
      note: ''
    },
    js: {
      status: ':bulb:',
      docsLink: `[docs](${baseUrl}/js/features/openapi/generate-openapi-client)`,
      note: ''
    }
  },
  {
    name: 'Enterprise messaging',
    category: 'messaging',
    java: {
      status: ':gear:',
      docsLink: ``,
      note: 'Planned. Depends on CAP'
    },
    js: {
      status: ':gear:',
      docsLink: ``,
      note: 'Planned. Depends on CAP'
    }
  },
  {
    name: 'Resilience pattern',
    category: 'Advanced',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/resilience/resilience)`,
      note: ''
    },
    js: {
      status: ':x:',
      docsLink: ``,
      note: ''
    }
  },
  {
    name: 'Caching pattern',
    category: 'Advanced',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/resilience/resilience)`,
      note: ''
    },
    js: {
      status: ':x:',
      docsLink: ``,
      note: ''
    }
  },
  {
    name:
      '[SCP Destinations](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)',
    category: 'Connectivity',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/connectivity/sdk-connectivity-destination-service)`,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination)`,
      note: ''
    }
  },
  {
    name:
      '[SCP Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)',
    category: 'Connectivity',
    java: {
      status: ':heavy_check_mark:',
      docsLink: ``,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: ``,
      note: ''
    }
  },
  {
    name: 'Authentication',
    category: 'Connectivity',
    java: {
      status: ':heavy_check_mark:',
      docsLink: ``,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination#authentication-and-json-web-token-retrievjal)`,
      note: ''
    }
  },
  {
    name: 'Multi-tenancy',
    category: 'Connectivity',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/multi-tenancy/multi-tenancy-thread-context)`,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination#multi-tenancy)`,
      note: ''
    }
  },
  {
    name: 'Proxy',
    category: 'Connectivity',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/connectivity/sdk-connectivity-destination-service)`,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination#multi-tenancy)`,
      note: ''
    }
  },
  {
    name: 'HTTP Client wrapper',
    category: 'Connectivity',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/connectivity/sdk-connectivity-http-client)`,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/connectivity/generic-http-client)`,
      note: ''
    }
  },
  {
    name: 'Principal propagation',
    category: 'connectivity',
    java: {
      status: ':heavy_check_mark:',
      docsLink: ``,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: ``,
      note: ''
    }
  },
  {
    name:
      '[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)',
    category: 'connectivity',
    java: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/java/features/connectivity/sdk-connectivity-destination-service#connect-to-sap-s4hana-on-premise)`,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/connectivity/on-premise)`,
      note: ''
    }
  },
  {
    name: 'CLI',
    category: 'CLI',
    java: {
      status: ':heavy_check_mark:',
      docsLink: ``,
      note: ''
    },
    js: {
      status: ':heavy_check_mark:',
      docsLink: `[docs](${baseUrl}/js/features/cli/overview)`,
      note: ''
    }
  }
];
