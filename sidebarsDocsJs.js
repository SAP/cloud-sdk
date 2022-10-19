module.exports = {
  docsJsSidebar: [
    'overview-cloud-sdk-for-javascript',
    'getting-started',
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'OData',
          items: [
            'features/odata/overview',
            'features/odata/generate-odata-client',
            'features/odata/execute-odata-request',
            'features/odata/use-odata-v2-type-safe-client-for-javascript-typescript',
            'features/odata/use-odata-v4-type-safe-client-for-javascript-typescript'
          ]
        },
        {
          type: 'category',
          label: 'Connectivity',
          items: [
            'features/connectivity/destination',
            'features/connectivity/destination-cache-isolation',
            'features/connectivity/proxy',
            'features/connectivity/generic-http-client',
            'features/connectivity/on-premise'
          ]
        },
        {
          type: 'category',
          label: 'OpenAPI',
          items: [
            'features/openapi/overview',
            'features/openapi/generate-openapi-client',
            'features/openapi/execute-openapi-request'
          ]
        },
        {
          type: 'category',
          label: 'Mail Client',
          items: ['features/mail-client/mail-client']
        },
        'features/error-handling',
        'features/logging',
        'features/eslint-configuration'
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/migrate-sdk-application-from-btp-cf-to-kubernetes',
        'guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript',
        'guides/upgrade-to-version-2',
        'guides/bas-external-system',
        'guides/sdk-in-browser',
        'guides/trust-and-key-stores',
        'guides/how-to-use-the-approuter',
        'guides/how-to-add-resilience',
        'guides/how-to-retrieve-jwt',
        'guides/debug-remote-app'
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
            'tutorials/getting-started/introduction',
            'tutorials/getting-started/set-up-dev-environment',
            'tutorials/getting-started/execute-an-odata-request',
            'tutorials/getting-started/deploy-app-to-cf'
          ]
        },
        {
          type: 'category',
          label: 'Address Manager',
          items: [
            'tutorials/address-manager/read-addresses',
            'tutorials/address-manager/change-addresses'
          ]
        },
        'tutorials/multi-tenant-application'
      ]
    },
    {
      type: 'category',
      label: 'Releases',
      items: ['release-policy']
    },
    {
      type: 'category',
      label: 'Video Tutorials',
      items: ['video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap']
    },
    'release-notes-sap-cloud-sdk-for-javascript-and-typescript',
    'support-js'
  ]
};
