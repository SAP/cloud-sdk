module.exports = {
  someSidebar: {
    // Dzen: ['dzen/getting-started', 'dzen/how-to-write-documentation'],
    Overview: [
      'overview/overview-cloud-sdk',
      'overview/getting-started',
      'overview/benefits',
      'overview/who-uses-sap-cloud-sdk',
      'overview/frequently-asked-questions-about-sap-cloud-sdk',
      'overview/get-support'
      // 'overview/key-features'
      // 'overview/what-is-new'
    ],
    Java: [
      'java/overview-cloud-sdk-for-java',
      'java/getting-started',
      {
        type: 'category',
        label: 'Features',
        items: [
          // authorization & authentication
          // resilience & caching
          {
            type: 'category',
            label: 'OData',
            items: [
              'java/features/odata/overview',
              'java/features/odata/generate-typed-odata-v2-and-v4-client-for-java',
              'java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java',
              'java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java'
            ]
          },
          {
            type: 'category',
            label: 'REST',
            items: [
              'java/features/rest/overview',
              'java/features/rest/generate-rest-client',
              {
                type: 'category',
                label: 'Released clients',
                items: ['java/features/rest/clients/scp-workflow-rest-api']
              }
            ]
          },
          'java/features/bapi-and-rfc/bapi-and-rfc-overview',
          {
            type: 'category',
            label: 'Connectivity',
            items: [
              'java/features/connectivity/sdk-connectivity-destination-service',
              'java/features/connectivity/sdk-connectivity-http-client'
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
          },
          {
            type: 'category',
            label: 'SDK extensions',
            items: [
              'java/features/extensions/extensions-supported-by-sap-cloud-sdk-for-java',
              {
                type: 'category',
                label: 'Extension library',
                items: [
                  'java/features/extensions/extension-library/curconv/sap-currency-conversion-extension-library-for-cloud-sdk-for-java'
                  // 'java/features/extensions/extension-library/blockchain/sap-blockchain-extension-library-for-cloud-sdk-for-java',
                ]
              }
            ]
          }
        ]
      },
      //   {
      //     type: 'category',
      //     label: 'Advanced features',
      //     items: [
      //       'untyped-client',
      //       'odata-helper-classes',
      //       'utility-classes',
      //       'open-api-client',
      //       'sdk-as-a-service',
      //       ''
      //     ]
      //   },
      //   'client-libraries',
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
          'java/guides/cap-sdk-integration'
        ]
      },
      {
        type: 'category',
        label: 'Video tutorials',
        items: [
          'java/video/video-tutorial-about-getting-started-with-sap-cloud-sdk-for-java',
          'java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java',
          'java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java',
          'java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client'
        ]
      },
      'java/sdk-java-troubleshooting-frequent-problems',
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
              'js/features/odata/executing-a-request-using-a-generated-odata-v2-v4-client-with-sap-cloud-sdk-for-javascript',
              'js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript',
              'js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript'
            ]
          },
          {
            type: 'category',
            label: 'Connectivity',
            items: [
              'js/features/connectivity/destination-js-sdk',
              'js/features/connectivity/proxy-js-sdk',
              'js/features/connectivity/generic-http-client',
              'js/features/connectivity/on-premise-connectivity-in-the-sap-cloud-sdk-for-javascript'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Guides',
        items: [
          'js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript',
          'js/guides/bas-external-system',
          'js/guides/tutorial-overview-sdk-js',
          'js/guides/sdk-in-browser'
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
    Community: ['community/community-call'],
    'Related projects': [
      'related-projects/cloud-application-model',
      'related-projects/sap-xsuaa-security-library-for-javascript-and-java',
      'related-projects/project-piper'
    ]
  }
};
