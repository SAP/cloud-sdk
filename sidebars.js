module.exports = {
  someSidebar: {
    // Dzen: ['dzen/getting-started', 'dzen/how-to-write-documentation'],
    Overview: [
      'overview/overview-cloud-sdk',
      'overview/cloud-sdk-feature-matrix',
      'overview/getting-started',
      'overview/benefits',
      'overview/who-uses-sap-cloud-sdk',
      'overview/frequently-asked-questions-about-sap-cloud-sdk',
      'overview/get-support'
    ],
    Java: [
      'java/overview-cloud-sdk-for-java',
      'java/getting-started',
      {
        type: 'category',
        label: 'Features',
        items: [
          // authorization & authentication
          {
            type: 'category',
            label: 'OData',
            items: [
              'java/features/odata/overview',
              'java/features/odata/generate-typed-odata-v2-and-v4-client-for-java',
              'java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java',
              'java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java',
              'java/features/odata/generic-untyped-odata-client'
            ]
          },
          {
            type: 'category',
            label: 'OpenAPI',
            items: [
              'java/features/rest/overview',
              'java/features/rest/generate-rest-client',
              {
                type: 'category',
                label: 'Released Clients',
                items: [
                  'java/features/rest/clients/scp-workflow-rest-api',
                  'java/features/rest/clients/btp-business-rules-rest-api'
                ]
              }
            ]
          },
          'java/features/bapi-and-rfc/bapi-and-rfc-overview',
          {
            type: 'category',
            label: 'Connectivity',
            items: [
              'java/features/connectivity/sdk-connectivity-destination-service',
              'java/features/connectivity/sdk-connectivity-http-client',
              'java/features/connectivity/sdk-connectivity-mtls'
            ]
          },
          {
            type: 'category',
            label: 'Multitenancy',
            items: ['java/features/multi-tenancy/multi-tenancy-thread-context']
          },
          {
            type: 'category',
            label: 'Resilience & Caching',
            items: [
              'java/features/resilience/resilience',
              'java/features/resilience/caching'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Environments',
        items: [
          'java/environments/sap-btp-environments-overview',
          'java/environments/sap-btp-cloud-foundry-environment',
          'java/environments/sap-btp-kubernetes-environment-with-sap-gardener',
          'java/environments/sap-btp-kyma-environment',
          'java/features/service-bindings/load-service-bindings-from-environment'
        ]
      },
      {
        type: 'category',
        label: 'Guides',
        items: [
          'java/guides/cf-cli',
          'java/guides/cf-deploy',
          'java/guides/cloud-foundry-xsuaa-service',
          'java/guides/manage-dependencies',
          'java/guides/logging-overview',
          'java/guides/tutorial-overview-sdk-java',
          'java/guides/sap-cloud-sdk-linux-how-to',
          'java/guides/cap-sdk-integration',
          'java/guides/spring-boot-war-deployment'
        ]
      },
      {
        type: 'category',
        label: 'Extensions',
        items: [
          'java/extensions/extensions-supported-by-sap-cloud-sdk-for-java'
        ]
      },
      {
        type: 'category',
        label: 'Video Tutorials',
        items: [
          'java/video/video-tutorial-about-getting-started-with-sap-cloud-sdk-for-java',
          'java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java',
          'java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java',
          'java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client'
        ]
      },
      'java/sdk-java-troubleshooting-frequent-problems',
      'java/release-policy',
      'java/release-notes-sap-cloud-sdk-for-java',
      'java/frequently-asked-questions'
    ],
    JavaScript: [
      'js/overview-cloud-sdk-for-javascript',
      'js/getting-started',
      {
        type: 'category',
        label: 'Features',
        items: [
          {
            type: 'category',
            label: 'OData',
            items: [
              'js/features/odata/overview',
              'js/features/odata/generate-odata-client',
              'js/features/odata/execute-odata-request',
              'js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript',
              'js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript'
            ]
          },
          {
            type: 'category',
            label: 'Connectivity',
            items: [
              'js/features/connectivity/destination',
              'js/features/connectivity/destination-cache-isolation',
              'js/features/connectivity/proxy',
              'js/features/connectivity/generic-http-client',
              'js/features/connectivity/on-premise'
            ]
          },
          {
            type: 'category',
            label: 'OpenAPI',
            items: [
              'js/features/openapi/overview',
              'js/features/openapi/generate-openapi-client',
              'js/features/openapi/execute-openapi-request',
              {
                type: 'category',
                label: 'Pregenerated Clients',
                items: ['js/features/openapi/pregenerated-clients/workflow']
              }
            ]
          },
          'js/features/error-handling',
          'js/features/logging',
          'js/features/eslint-configuration'
        ]
      },
      {
        type: 'category',
        label: 'Guides',
        items: [
          'js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes',
          'js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript',
          'js/guides/upgrade-to-version-2',
          'js/guides/bas-external-system',
          'js/guides/sdk-in-browser',
          'js/guides/trust-and-key-stores',
          'js/guides/how-to-use-the-approuter',
          'js/guides/how-to-add-resilience',
          'js/guides/how-to-retrieve-jwt'
        ]
      },
      {
        type: 'category',
        label: 'Tutorials',
        items: [
          {
            type: 'category',
            label: 'Getting Started',
            items: [
              'js/tutorials/getting-started/introduction',
              'js/tutorials/getting-started/set-up-dev-enviroment',
              'js/tutorials/getting-started/execute-an-odata-request',
              'js/tutorials/getting-started/deploy-app-to-cf'
            ]
          },
          {
            type: 'category',
            label: 'Address Manager',
            items: [
              'js/tutorials/address-manager/read-addresses',
              'js/tutorials/address-manager/change-addresses'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Extensions',
        items: ['js/extensions/currency-conversion']
      },
      {
        type: 'category',
        label: 'Releases',
        items: [
          'js/release-policy',
          'js/announcing-version-2',
          'js/announcing-version-2-beta'
        ]
      },
      {
        type: 'category',
        label: 'Video Tutorials',
        items: ['js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap']
      },
      'js/api',
      'js/release-notes-sap-cloud-sdk-for-javascript-and-typescript',
      'js/frequently-asked-questions'
    ],
    Community: ['community/community-call', 'community/sap-teched'],
    'Related Projects': [
      'related-projects/cloud-application-model',
      'related-projects/sap-xsuaa-security-library-for-javascript-and-java',
      'related-projects/project-piper'
    ]
  }
};
