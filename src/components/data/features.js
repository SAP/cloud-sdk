const baseUrl = '/cloud-sdk/docs';
const YES = ':heavy_check_mark:';
const NO = ':x:';
const PLANNED = ':date:';
const DEPRECATED = ':warning:';
const BETA = ':gear:';
const FEATURE_REQUEST =
  '[Request this feature](https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=)';
/**
 * Global SDK feature list.
 */
export const features = [
  {
    name: '[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)',
    category: 'Legacy',
    java: {
      status: YES,
      docsLink: ``,
      note: ''
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Take a look at the [node-soap](https://github.com/vpulim/node-soap) library'
    }
  },
  {
    name: '[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)',
    category: 'Legacy',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/bapi-and-rfc/overview/)`,
      note: ''
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)'
    }
  },
  {
    name: '[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)',
    category: 'Legacy',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/bapi-and-rfc/overview/)`,
      note: ''
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)'
    }
  },
  {
    name: '[OData v2 typed client](https://www.odata.org/documentation/odata-version-2-0/)',
    category: 'OData',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/odata/v2-vdm-client)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript)`,
      note: ''
    }
  },
  {
    name: '[OData v4 typed client](https://www.odata.org/documentation/)',
    category: 'OData',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/odata/v4-vdm-client)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)`,
      note: ''
    }
  },
  {
    name: 'Generic not typed OData client',
    category: 'OData',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/odata/generic-untyped-odata-client)`,
      note: ''
    },
    js: {
      status: NO,
      docsLink: ``,
      note: `We expose [generic HTTP client](${baseUrl}/js/features/connectivity/generic-http-client) aware of connectivity abstractions`
    }
  },
  {
    name: '[OData code generator](https://www.odata.org/documentation/)',
    category: 'OData',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/odata/vdm-generator)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/odata/generate-odata-client)`,
      note: ''
    }
  },
  {
    name: 'OpenAPI 2.0 typed client',
    category: 'OpenAPI',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/rest/overview)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/openapi/execute-openapi-request)`,
      note: ''
    }
  },
  {
    name: 'OpenAPI 3.0 typed client',
    category: 'OpenAPI',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/rest/overview)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/openapi/execute-openapi-request)`,
      note: ''
    }
  },
  {
    name: 'OpenAPI code generator',
    category: 'OpenAPI',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/rest/generate-rest-client)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/openapi/generate-openapi-client)`,
      note: ''
    }
  },
  {
    name: 'Enterprise messaging',
    category: 'Messaging',
    java: {
      status: PLANNED,
      docsLink: ``,
      note: 'Planned. Depends on CAP'
    },
    js: {
      status: PLANNED,
      docsLink: ``,
      note: 'Planned. Depends on CAP'
    }
  },
  {
    name: 'Resilience pattern',
    category: 'Advanced',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/resilience/resilience)`,
      note: ''
    },
    js: {
      status: NO,
      docsLink: ``,
      note: FEATURE_REQUEST
    }
  },
  {
    name: 'Caching pattern',
    category: 'Advanced',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/resilience/resilience)`,
      note: ''
    },
    js: {
      status: NO,
      docsLink: ``,
      note: FEATURE_REQUEST
    }
  },
  {
    name: '[BTP Cloud Foundry Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html)',
    category: 'Environment',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/environments/cloud-foundry)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,
      note: ''
    }
  },
  {
    name: '[Kubernetes with SAP Gardener](https://gardener.cloud/)',
    category: 'Environment',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/environments/kubernetes-gardener)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes)`,
      note: ''
    }
  },
  {
    name: '[BTP Kyma Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/468c2f3c3ca24c2c8497ef9f83154c44.html)',
    category: 'Environment',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/environments/kubernetes-kyma)`,
      note: `[Kyma Open Source project](https://kyma-project.io/)`
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,
      note: ''
    }
  },
  {
    name: 'Deploy with Confidence (DwC)',
    category: 'Environment',
    java: {
      status: YES,
      docsLink: ``,
      note: `Internal only or allow listed`
    },
    js: {
      status: NO,
      docsLink: ``,
      note: FEATURE_REQUEST
    }
  },
  {
    name: '[BTP Neo Environment](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)',
    category: 'Environment',
    java: {
      status: YES,
      docsLink: ``,
      note: `Not recommended for new projects`
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Not recommended for new projects'
    }
  },
  {
    name: '[SAP BTP ABAP Environent](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/11d62652aa2b4600a0fa136de0789648.html)',
    category: 'Environment',
    java: {
      status: NO,
      docsLink: '',
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: '',
      note: 'Out of scope'
    }
  },
  {
    name: '[BTP CF Connectivity Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/313b215066a8400db461b311e01bd99b.html)',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/connectivity/sdk-connectivity-destination-service)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination)`,
      note: ''
    }
  },
  {
    name: '[BTP CF Destination Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/connectivity/destination-service)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination)`,
      note: ''
    }
  },
  {
    name: '[BTP CF XSUAA Service](https://sap.github.io/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service)',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/connectivity/destination-service)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination)`,
      note: ''
    }
  },
  {
    name: '[BTP CF Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: ``,
      note: ''
    },
    js: {
      status: YES,
      docsLink: ``,
      note: ''
    }
  },
  {
    name: 'Authentication',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: ``,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination#authentication-and-json-web-token-retrievjal)`,
      note: ''
    }
  },
  {
    name: 'Multi-tenancy',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/multi-tenancy/thread-context)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination#multi-tenancy)`,
      note: ''
    }
  },
  {
    name: 'Proxy',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/connectivity/destination-service)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination#multi-tenancy)`,
      note: ''
    }
  },
  {
    name: 'HTTP Client wrapper',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/connectivity/http-client)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/generic-http-client)`,
      note: ''
    }
  },
  {
    name: '[Principal propagation](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e2cbb48def4342048362039cc157b12e.html?q=principal)',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: ``,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/on-premise#principal-propagation)`,
      note: ''
    }
  },
  {
    name: '[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/connectivity/-destination-service#connect-to-sap-s4hana-on-premise)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/on-premise)`,
      note: ''
    }
  },
  {
    name: 'CLI',
    category: 'CLI',
    java: {
      status: YES,
      docsLink: ``,
      note: `Via a Maven plugin `
    },
    js: {
      status: DEPRECATED,
      docsLink: `[docs](${baseUrl}/js/features/cli/overview)`,
      note: ''
    }
  },
  {
    name: 'MDI',
    category: 'MDI',
    java: {
      status: YES,
      docsLink: ``,
      note: `Internal only or allow listed`
    },
    js: {
      status: NO,
      docsLink: ``,
      note: FEATURE_REQUEST
    }
  }
];

/**
 * List of OData feauters supported or planned to be supported by SDK
 */
export const ODataFeatures = [
  {
    name: 'Get an Entity by Key',
    type: 'CRUD',
    java: {
      v2: {
        status: YES,
        docs: ''
      },
      v4: {
        status: YES,
        docs: ''
      }
    },
    js: {
      v2: {
        status: YES,
        docs: ''
      },
      v4: {
        status: YES,
        docs: ''
      }
    }
  }
];

/**
 * List of OpenAPI features supported or planned to be supported by SDK
 */
export const OpenAPIFeatures = [];

/**
 * List of releases or planned extensions
 */
export const extensions = [
  {
    name: 'Currency conversion library',
    js: {
      status: PLANNED
    }
  }
];
