module.exports = {
  docsJsSidebar: [
    'overview',
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
            'features/odata/odata-v2-client',
            'features/odata/odata-v4-client'
          ]
        },
        {
          type: 'category',
          label: 'Connectivity',
          items: [
            'features/connectivity/destinations',
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
        'guides/migrate-cf-to-kubernetes',
        'guides/migrate-to-open-source-cloud-sdk',
        'guides/upgrade-to-version-2',
        'guides/connect-external-system-to-bas',
        'guides/sdk-in-browser',
        'guides/trust-and-key-stores',
        'guides/approuter-with-cloud-sdk',
        'guides/resilience-with-cloud-sdk',
        'guides/retrieve-jwt',
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
      items: ['video/cloud-sdk-with-calm-and-cap']
    },
    'release-notes',
    'support'
  ]
};
