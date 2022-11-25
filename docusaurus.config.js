const { ProvidePlugin } = require('webpack');

// We have to polyfill some Node APIs because Docusaurus migrated to Webpack 5
// This is mainly required because of remark related modules which don't load otherwise
// Also process is required for local runs
class ESMPolyfillWrapper {
  apply(compiler) {
    compiler.options.plugins.push(
      new ProvidePlugin({
        process: 'process/browser.js'
      })
    );
  }
}

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SAP Cloud SDK',
  tagline:
    'The one-stop shop for developing and extending SAP applications in the cloud.',
  url: 'https://sap.github.io',
  baseUrl: '/cloud-sdk/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'SAP',
  projectName: 'cloud-sdk',
  trailingSlash: false,
  themeConfig: {
    announcementBar: {
      id: 'feedback_survey',
      content:
        'How do you like the SAP Cloud SDK? Share your <a href="https://sapinsights.eu.qualtrics.com/jfe/form/SV_0P69X6kJ0Pdxqbc" style="color: var(--ifm-link-color);text-decoration: var(--ifm-link-decoration);transition: color var(--ifm-transition-fast) var(--ifm-transition-timing-default)">feedback</a>.',
      backgroundColor: 'var(--ifm-color-secondary)',
      // textColor: '#091E42',
      isCloseable: false
    },
    prism: {
      additionalLanguages: ['powershell', 'java', 'groovy'],
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula')
    },
    algolia: {
      apiKey: '441c57554e5a0ca9338cc9f047fb10c8',
      indexName: 'sap_cloud-sdk',
      appId: 'E4A268JVO0',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    // ***************************************************************
    // Activate this announcement bar for global urgent notifications
    // ***************************************************************
    //
    // announcementBar: {
    //   id: 'survey', // Any value that will identify this message
    //   content:
    //      '&#11088;&#11088;&#11088; Please, help us improving SAP Cloud SDK by taking <a target="_blank" rel="noopener noreferrer" href="https://sapinsights.eu.qualtrics.com/jfe/form/SV_0pUmWpCadpoLhyZ">our survey</a> &#11088;&#11088;&#11088;',
    //   backgroundColor: '#fff', // Defaults to `#fff`
    //   textColor: '#000', // Defaults to `#000`,
    //   isCloseable: false, // Defaults to `true`.

    // },
    navbar: {
      title: 'SAP Cloud SDK',
      logo: {
        alt: 'SAP Cloud SDK',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          label: 'Overview',
          type: 'doc',
          docId: 'overview-cloud-sdk',
          position: 'left'
        },
        {
          label: '☕ Java',
          to: 'docs/java/overview-cloud-sdk-for-java',
          position: 'left',
          docsPluginId: 'docs-java',
          activeBasePath: 'docs/java',
          sdkSwitch: true
        },
        {
          label: '🚀 JavaScript',
          to: 'docs/js/overview',
          position: 'left',
          docsPluginId: 'docs-js',
          activeBasePath: 'docs/js',
          sdkSwitch: true
        },
        {
          type: 'dropdown',
          label: 'API Reference',
          position: 'right',
          items: [],
          docsPluginId: 'docs-js',
          apiReference: true
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          docsPluginId: 'docs-js'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          docsPluginId: 'docs-java'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SAP Cloud SDK for Java',
          items: [
            {
              label: 'Tutorials',
              href: 'https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk'
            },
            {
              label: 'Maven',
              href: 'https://search.maven.org/search?q=g:com.sap.cloud.sdk*'
            },
            {
              label: 'Support',
              to: 'docs/java/support-java'
            }
          ]
        },
        {
          title: 'SAP Cloud SDK for JavaScript',
          items: [
            {
              label: 'Tutorials',
              to: 'docs/js/tutorials/getting-started/introduction'
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/search?q=%40sap-cloud-sdk'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SAP/cloud-sdk-js'
            },
            {
              label: 'Sample repository',
              href: 'https://github.com/SAP-samples/cloud-sdk-js'
            },
            {
              label: 'Support',
              to: 'docs/js/support'
            }
          ]
        },
        {
          title: 'Additional Resources',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sap-cloud-sdk'
            },
            {
              label: 'SAP Cloud SDK Community Page',
              href: 'https://community.sap.com/topics/cloud-sdk'
            },
            {
              label: 'SAP Cloud SDK on SAP Answers',
              href: 'https://answers.sap.com/tags/73555000100800000895'
            },
            {
              label: 'SAP Cloud SDK on SAP Help',
              href: 'https://help.sap.com/viewer/product/SAP_CLOUD_SDK/1.0/en-US?task=discover_task'
            },
            {
              label: 'Feedback',
              href: 'https://sapinsights.eu.qualtrics.com/jfe/form/SV_0P69X6kJ0Pdxqbc'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SAP SE or an SAP affiliate company. All rights reserved.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebarsDocsCommon.js'),
          editUrl: 'https://github.com/SAP/cloud-sdk/edit/main',
          routeBasePath: 'docs/overview',
          path: 'docs'
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')]
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '/cloud-sdk/api/**',
            '/cloud-sdk/components/**',
            '/cloud-sdk/docs/js/v1/features/common/**',
            '/cloud-sdk/docs/js/v1/features/odata/common/**',
            '/cloud-sdk/docs/js/v1/features/odata/v2/**',
            '/cloud-sdk/docs/js/v1/features/odata/v4/**',
            '/cloud-sdk/docs/js/features/common/**',
            '/cloud-sdk/docs/js/features/odata/common/**',
            '/cloud-sdk/docs/js/features/odata/v2/**',
            '/cloud-sdk/docs/js/features/odata/v4/**'
          ]
        }
      }
    ]
  ],
  scripts: [
    {
      src: 'https://sap.github.io/cloud-sdk/js/swa.js'
    }
  ],
  customFields: {},
  plugins: [
    [
      './src/plugins/plugin-latest-api-doc',
      {
        latestBaseUrl: '/cloud-sdk/api/latest',
        versions: '../static/api/versions.json'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-java',
        path: 'docs-java',
        editUrl: 'https://github.com/SAP/cloud-sdk/edit/main',
        routeBasePath: 'docs/java',
        sidebarPath: require.resolve('./sidebarsDocsJava.js'),
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v4',
            badge: false
          },
          v3: {
            label: 'v3',
            path: 'v3',
            badge: false
          }
        }
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-js',
        path: 'docs-js',
        editUrl: 'https://github.com/SAP/cloud-sdk/edit/main',
        routeBasePath: 'docs/js',
        sidebarPath: require.resolve('./sidebarsDocsJs.js'),
        lastVersion: 'v2',
        versions: {
          current: {
            label: 'v3',
            path: 'v3',
            banner: 'unreleased',
            badge: false
          },
          v2: {
            label: 'v2',
            banner: 'none',
            badge: false
          },
          v1: {
            label: 'v1',
            path: 'v1',
            banner: 'unmaintained',
            badge: false
          }
        }
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: [
              '/docs/js/frequently-asked-questions',
              '/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript'
            ],
            to: '/docs/js/overview'
          },
          {
            from: ['/docs/community', '/docs/related-projects'],
            to: '/docs/overview/overview-cloud-sdk'
          },
          {
            from: '/docs/js/support-js',
            to: '/docs/js/support'
          },
          {
            from: '/docs/js/release-notes-sap-cloud-sdk-for-javascript-and-typescript',
            to: '/docs/js/release-notes'
          },
          {
            from: '/docs/js/overview-cloud-sdk-for-javascript',
            to: '/docs/js/overview'
          },
          {
            from: '/docs/js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap',
            to: '/docs/js/video/calm'
          },
          {
            from: '/docs/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes',
            to: '/docs/js/guides/kubernetes'
          },
          {
            from: '/docs/js/guides/bas-external-system',
            to: '/docs/js/guides/bas'
          },
          {
            from: '/docs/js/guides/how-to-use-the-approuter',
            to: '/docs/js/guides/approuter'
          },
          {
            from: '/docs/js/guides/how-to-add-resilience',
            to: '/docs/js/guides/resilience'
          },
          {
            from: '/docs/js/guides/how-to-retrieve-jwt',
            to: '/docs/js/guides/retrieve-jwt'
          },
          {
            from: '/docs/js/features/connectivity/destination',
            to: '/docs/js/features/connectivity/destinations'
          },
          {
            from: '/docs/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript',
            to: '/docs/js/features/odata/v2-client'
          },
          {
            from: '/docs/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript',
            to: '/docs/js/features/odata/v4-client'
          },
          {
            from: '/docs/js/features/connectivity/destination-cache-isolation',
            to: '/docs/js/features/connectivity/destination-cache'
          },
          {
            from: '/docs/js/guides/sdk-in-browser',
            to: '/docs/js/guides/browser'
          },
          {
            from: '/docs/js/guides/trust-and-key-stores',
            to: '/docs/js/guides/trust-and-keystores'
          },
          {
            from: '/docs/js/features/connectivity/generic-http-client',
            to: '/docs/js/features/connectivity/http-client'
          },
          {
            from: '/docs/js/guides/debug-remote-app',
            to: '/docs/js/guides/remote-debugging'
          },
          {
            from: '/docs/js/features/connectivity/proxy',
            to: '/docs/js/features/connectivity/proxies'
          },
          {
            from: '/docs/js/tutorials/address-manager/read-addresses',
            to: '/docs/js/tutorials/address-manager/read'
          },
          {
            from: '/docs/js/tutorials/address-manager/change-addresses',
            to: '/docs/js/tutorials/address-manager/change'
          },
          {
            from: '/docs/js/features/odata/generate-odata-client',
            to: '/docs/js/features/odata/generate-client'
          },
          {
            from: '/docs/js/features/odata/execute-odata-request',
            to: '/docs/js/features/odata/execute-request'
          },
          {
            from: '/docs/js/features/openapi/execute-openapi-request',
            to: '/docs/js/features/openapi/execute-request'
          },
          {
            from: '/docs/js/features/openapi/generate-openapi-client',
            to: '/docs/js/features/openapi/generate-client'
          },
          {
            from: '/docs/js/troubleshooting-js',
            to: '/docs/js/troubleshooting'
          },
          {
            from: '/docs/java/environments/sap-btp-environments-overview',
            to: '/docs/java/environments/overview'
          },
          {
            from: '/docs/java/environments/sap-btp-cloud-foundry-environment',
            to: '/docs/java/environments/cloud-foundry'
          },
          {
            from: '/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener',
            to: '/docs/java/environments/kubernetes-gardener'
          },
          {
            from: '/docs/java/environments/sap-btp-kyma-environment',
            to: '/docs/java/environments/kubernetes-kyma'
          },
          {
            from: '/docs/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java',
            to: '/docs/java/features/odata/v2-vdm-client'
          },
          {
            from: '/docs/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java',
            to: '/docs/java/features/odata/v4-vdm-client'
          },
          {
            from: '/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java',
            to: '/docs/java/features/odata/vdm-generator'
          },
          {
            from: '/docs/java/features/multi-tenancy/multi-tenancy-thread-context',
            to: '/docs/java/features/multi-tenancy/thread-context'
          },
          {
            from: '/docs/java/features/connectivity/sdk-connectivity-destination-service',
            to: '/docs/java/features/connectivity/destination-service'
          },
          {
            from: '/docs/java/features/connectivity/sdk-connectivity-http-client',
            to: '/docs/java/features/connectivity/http-client'
          },
          {
            from: '/docs/java/features/connectivity/sdk-connectivity-mtls',
            to: '/docs/java/features/connectivity/mtls'
          },
          {
            from: '/docs/java/features/bapi-and-rfc/bapi-and-rfc-overview',
            to: '/docs/java/features/bapi-and-rfc/overview'
          },
          {
            from: '/docs/java/sdk-java-troubleshooting-frequent-problems',
            to: '/docs/java/troubleshooting-frequent-problems'
          },
          {
            from: '/docs/java/release-notes-sap-cloud-sdk-for-java',
            to: '/docs/java/release-notes'
          },
          {
            from: '/docs/java/support-java',
            to: '/docs/java/support'
          }
        ]
      }
    ],
    function nodeWebpackPolyfillPlugin(context, options) {
      return {
        name: 'nodeWebpackPlyfill',
        configureWebpack(config, isServer) {
          return {
            plugins: [new ESMPolyfillWrapper()]
          };
        }
      };
    }
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  }
};
