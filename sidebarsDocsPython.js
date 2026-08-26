module.exports = {
  docsPythonSidebar: [
    'overview',
    'getting-started',
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Agent Modules',
          collapsed: false,
          items: [
            'features/agent-modules/tool-decorators',
            'features/agent-modules/agent-gateway',
            'features/agent-modules/agent-memory',
            'features/agent-modules/ai-core',
          ]
        },
        {
          type: 'category',
          label: 'Connectivity & Identity',
          collapsed: false,
          items: [
            'features/connectivity/destination-service',
            'features/connectivity/identity-ias',
            'features/connectivity/secret-management',
          ]
        },
        {
          type: 'category',
          label: 'Core Modules',
          collapsed: false,
          items: [
            'features/core-modules/audit-logging',
            'features/core-modules/telemetry',
            'features/core-modules/object-storage',
            'features/core-modules/runtime-context',
          ]
        },
        {
          type: 'category',
          label: 'RBS Services',
          collapsed: false,
          items: [
            'features/rbs-services/dms',
            'features/rbs-services/adms',
            'features/rbs-services/output-management',
            'features/rbs-services/print-service',
          ]
        },
      ]
    },
    'release-notes',
    'support',
    'troubleshooting'
  ]
};
