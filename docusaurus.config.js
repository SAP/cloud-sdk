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
  title: 'SAP Cloud SDK for AI',
  tagline: 'The one-stop shop for integrating AI into SAP Cloud applications.',
  url: 'https://sap.github.io',
  baseUrl: '/cloud-sdk/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/AI-SDK-Logo.svg',
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
      indexName: 'sap_cloud-sdk', // should be dynamic based on the URL, contextualSearch?, searchParameters?
      appId: 'E4A268JVO0',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    navbar: {
      title: 'SAP Cloud SDK for AI',
      logo: {
        alt: 'SAP Cloud SDK for AI',
        src: 'img/AI-SDK-Logo.svg',
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
          title: 'SAP Cloud SDK for AI Java',
          items: [
            {
              label: 'Tutorials',
              href: 'https://developers.sap.com/group.sap-ai-core-generative.html'
            },
            {
              label: 'Maven',
              href: 'https://central.sonatype.com/search?smo=true&namespace=com.sap.ai.sdk'
            },
            {
              label: 'Support',
              to: 'docs/overview/get-support'
            }
          ]
        },
        {
          title: 'SAP Cloud SDK for AI JavaScript',
          items: [
            {
              label: 'Tutorials',
              to: 'https://developers.sap.com/group.sap-ai-core-generative.html'
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/search?q=sap-ai-sdk'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SAP/ai-sdk-js'
            },
            {
              label: 'Sample repository',
              href: 'https://github.com/SAP/ai-sdk-js/tree/main/sample-code'
            },
            {
              label: 'Support',
              to: 'docs/overview/get-support'
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
          editUrl: 'https://github.com/SAP/ai-sdk/edit/main',
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
        editUrl: 'https://github.com/SAP/ai-sdk/edit/main',
        routeBasePath: 'docs/java',
        sidebarPath: require.resolve('./sidebarsDocsJava.js'),
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v1',
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
        editUrl: 'https://github.com/SAP/ai-sdk/edit/main',
        routeBasePath: 'docs/js',
        sidebarPath: require.resolve('./sidebarsDocsJs.js'),
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v1',
            badge: false
          }
        }
      }
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap-js',
        filename: 'sitemap-js.xml',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['**/docs/java/**']
      }
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap-java',
        filename: 'sitemap-java.xml',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['**/docs/js/**']
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
