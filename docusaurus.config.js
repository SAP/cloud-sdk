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
  favicon: 'favicon.ico',
  organizationName: 'SAP',
  projectName: 'cloud-sdk',
  trailingSlash: false,
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: true
    },
    prism: {
      additionalLanguages: ['powershell', 'java', 'groovy'],
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula
    },
    algolia: {
      apiKey: '441c57554e5a0ca9338cc9f047fb10c8',
      indexName: 'sap_cloud-sdk',
      appId: 'E4A268JVO0',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
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
          label: 'SAP Cloud SDK for AI',
          href: 'https://sap.github.io/ai-sdk',
          position: 'right'
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
              href: 'https://central.sonatype.com/search?q=g:com.sap.cloud.sdk*&smo=true'
            },
            {
              label: 'Support',
              to: 'docs/java/support'
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
              label: 'SAP Cloud SDK for AI',
              href: 'https://sap.github.io/ai-sdk'
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
            '/cloud-sdk/docs/js/*/features/common/**',
            '/cloud-sdk/docs/js/*/features/odata/common/**',
            '/cloud-sdk/docs/js/*/features/odata/v2/**',
            '/cloud-sdk/docs/js/*/features/odata/v4/**',
            '/cloud-sdk/docs/js/features/common/**',
            '/cloud-sdk/docs/js/features/odata/common/**',
            '/cloud-sdk/docs/js/features/odata/v2/**',
            '/cloud-sdk/docs/js/features/odata/v4/**'
          ]
        }
      }
    ]
  ],
  customFields: {},
  plugins: [
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
            label: 'v5',
            badge: false
          },
          v3: {
            label: 'v3',
            path: 'v3',
            banner: 'unmaintained',
            badge: false
          },
          v4: {
            label: 'v4',
            path: 'v4',
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
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v4',
            badge: false
          },
          v3: {
            label: 'v3',
            path: 'v3',
            banner: 'none',
            badge: false,
            noIndex: true
          },
          v2: {
            label: 'v2',
            path: 'v2',
            banner: 'unmaintained',
            badge: false,
            noIndex: true
          },
          v1: {
            label: 'v1',
            path: 'v1',
            banner: 'unmaintained',
            badge: false,
            noIndex: true
          }
        }
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: ['/docs/community', '/docs/related-projects'],
            to: '/docs/overview/overview-cloud-sdk'
          },
          {
            from: '/docs/java/features/rest/clients/btp-business-rules-rest-api',
            to: '/docs/java/v4/features/rest/clients/btp-business-rules-rest-api'
          },
          {
            from: '/docs/java/features/rest/clients/scp-workflow-rest-api',
            to: '/docs/java/v4/features/rest/clients/scp-workflow-rest-api'
          }
        ]
      }
    ],
    function nodeWebpackPolyfillPlugin(context, options) {
      return {
        name: 'nodeWebpackPolyfill',
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
