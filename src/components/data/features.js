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
      status: NO,
      docsLink: ``,
      note: 'Out of scope. Deprecated since 4.13.0'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Take a look at the [node-soap](https://github.com/vpulim/node-soap) library'
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    }
  },
  {
    name: '[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)',
    category: 'Legacy',
    java: {
      status: DEPRECATED,
      docsLink: `[docs](${baseUrl}/java/features/bapi-and-rfc/overview)`,
      note: 'Deprecated since 4.13.0'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)'
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    }
  },
  {
    name: '[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)',
    category: 'Legacy',
    java: {
      status: DEPRECATED,
      docsLink: `[docs](${baseUrl}/java/features/bapi-and-rfc/overview)`,
      note: 'Deprecated since 4.13.0'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)'
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
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
      docsLink: `[docs](${baseUrl}/js/features/odata/v2-client)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
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
      docsLink: `[docs](${baseUrl}/js/features/odata/v4-client)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
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
      note: `We expose [generic HTTP client](${baseUrl}/js/features/connectivity/http-client) aware of connectivity abstractions`
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Use the HTTP Client wrapper with destination awareness instead'
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
      docsLink: `[docs](${baseUrl}/js/features/odata/generate-client)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
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
      docsLink: `[docs](${baseUrl}/js/features/openapi/execute-request)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
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
      docsLink: `[docs](${baseUrl}/js/features/openapi/execute-request)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
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
      docsLink: `[docs](${baseUrl}/js/features/openapi/generate-client)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    }
  },
  {
    name: 'Enterprise messaging',
    category: 'Messaging',
    java: {
      status: NO,
      docsLink: ``,
      note: ''
    },
    js: {
      status: NO,
      docsLink: ``,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: ''
    }
  },
  {
    name: 'Resilience pattern',
    category: 'Advanced',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/resilience)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/guides/resilience)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: ''
    }
  },
  {
    name: 'Caching pattern',
    category: 'Advanced',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/resilience)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destination-cache)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: ''
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
      docsLink: `[docs](${baseUrl}/js/getting-started)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
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
      docsLink: `[docs](${baseUrl}/js/environments/kubernetes)`,
      note: ''
    },
    python: {
      status: YES,
      docsLink: ``,
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
      docsLink: `[docs](${baseUrl}/js/environments/kyma)`,
      note: ''
    },
    python: {
      status: YES,
      docsLink: ``,
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
      note: ''
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'Via `DWCContextProvider` in `sap_cloud_sdk.core.runtime_context`'
    }
  },
  {
    name: '[BTP Neo Environment](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)',
    category: 'Environment',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope. Deprecated since 4.17.0'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope.'
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
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
    },
    python: {
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
      docsLink: `[docs](${baseUrl}/java/features/connectivity/destination-service)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destinations)`,
      note: ''
    },
    python: {
      status: YES,
      docsLink: ``,
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
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destinations)`,
      note: ''
    },
    python: {
      status: YES,
      docsLink: ``,
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
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destinations)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: 'IAS is the primary identity provider;'
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
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'Via [servicebinding.io](https://servicebinding.io/) spec and `SERVICE_BINDING_ROOT`'
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
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destinations#authentication-and-json-web-token-retrievjal)`,
      note: ''
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'OAuth flows handled via IAS module and Destination Service'
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
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destinations#multi-tenancy)`,
      note: ''
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'Tenant isolation applied throughout; `create_client(tenant=subdomain)` pattern'
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
      docsLink: `[docs](${baseUrl}/js/features/connectivity/destinations#multi-tenancy)`,
      note: ''
    },
    python: {
      status: YES,
      docsLink: ``,
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
      docsLink: `[docs](${baseUrl}/js/features/connectivity/http-client)`,
      note: ''
    },
    python: {
      status: YES,
      docsLink: ``,
      note: '`DestinationHttpClient` — destination-aware HTTP client'
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
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'User token exchange via IAS Destination Fragments'
    }
  },
  {
    name: '[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)',
    category: 'Connectivity',
    java: {
      status: YES,
      docsLink: `[docs](${baseUrl}/java/features/connectivity/destination-service#connect-to-sap-s4hana-on-premise)`,
      note: ''
    },
    js: {
      status: YES,
      docsLink: `[docs](${baseUrl}/js/features/connectivity/on-premise)`,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: ''
    }
  },
  {
    name: 'MDI',
    category: 'MDI',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope. Deprecated since 4.23.0'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: ''
    },
    python: {
      status: NO,
      docsLink: ``,
      note: ''
    }
  },
  // Python-only features
  {
    name: '[Identity and Access Service (IAS)](https://help.sap.com/docs/identity-authentication)',
    category: 'Connectivity',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'Token verification, user context propagation, service-to-service auth'
    }
  },
  {
    name: '[Audit Logging](https://help.sap.com/docs/audit-log-service)',
    category: 'Advanced',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'Standard and next-generation (NG) SAP Audit Log Service APIs supported'
    }
  },
  {
    name: 'Telemetry / OpenTelemetry',
    category: 'Advanced',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'Auto-instrumentation of HTTP clients and frameworks via `auto_instrument()`; exports to SAP Cloud Logging'
    }
  },
  {
    name: 'Secret Management',
    category: 'Advanced',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'Resolves secrets from Kubernetes-mounted bindings and env vars (`CLOUD_SDK_CFG_*`)'
    }
  },
  {
    name: 'Object Storage',
    category: 'BTP Services',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: ``,
      note: ''
    }
  },
  {
    name: 'Document Management Service',
    category: 'BTP Services',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: ``,
      note: ''
    }
  },
  {
    name: 'Output Management Service',
    category: 'BTP Services',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: ``,
      note: 'Send emails, create and send output requests via `sap_cloud_sdk.outputmanagement`'
    }
  },
  {
    name: '[SAP AI Core](https://help.sap.com/docs/sap-ai-core)',
    category: 'AI',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: `[docs](${baseUrl}/python/overview)`,
      note: 'Manage AI scenarios, deployments, and executions via `AICoreClient`'
    }
  },
  {
    name: 'Agent Gateway Service',
    category: 'AI',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: `[docs](${baseUrl}/python/overview)`,
      note: 'MCP tool discovery from SAP LoB systems; A2A agent routing; principal propagation'
    }
  },
  {
    name: 'Agent Memory Service',
    category: 'AI',
    java: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    js: {
      status: NO,
      docsLink: ``,
      note: 'Out of scope'
    },
    python: {
      status: YES,
      docsLink: `[docs](${baseUrl}/python/overview)`,
      note: 'Persistent conversation history and semantic memory search backed by SAP HANA Cloud'
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
