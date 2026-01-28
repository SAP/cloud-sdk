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
            'features/odata/generate-client',
            'features/odata/execute-request',
            'features/odata/v2-client',
            'features/odata/v4-client'
          ]
        },
        {
          type: 'category',
          label: 'Connectivity',
          items: [
            'features/connectivity/destinations',
            'features/connectivity/destination-cache',
            'features/connectivity/proxies',
            'features/connectivity/http-client',
            'features/connectivity/csrf',
            'features/connectivity/on-premise',
            'features/connectivity/identity-authentication-service'
          ]
        },
        {
          type: 'category',
          label: 'OpenAPI',
          items: [
            'features/openapi/overview',
            'features/openapi/generate-client',
            'features/openapi/execute-request'
          ]
        },
        'features/middleware',
        'features/error-handling',
        'features/logging',
        'features/eslint-configuration'
      ]
    },
    {
      type: 'category',
      label: 'Environments',
      items: ['environments/kubernetes', 'environments/kyma']
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/upgrade-to-version-4',
        'guides/bas',
        'guides/browser',
        'guides/trust-and-keystores',
        'guides/approuter',
        'guides/resilience',
        'guides/retrieve-jwt',
        'guides/remote-debugging',
        'guides/api-business-hub-download-specification'
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
            'tutorials/address-manager/read',
            'tutorials/address-manager/change'
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
      items: ['video/calm']
    },
    {
      type: 'link',
      label: 'API Reference',
      href: 'pathname:///api/v4/index.html'
    },
    'release-notes',
    'support',
    'troubleshooting'
  ]
};
