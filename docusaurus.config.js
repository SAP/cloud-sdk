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
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SAP',
  projectName: 'cloud-sdk',
  trailingSlash: false,
  themeConfig: {
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
          to: 'docs/overview/overview-cloud-sdk',
          label: 'Docs',
          position: 'left'
        },
        {
          label: 'Support',
          position: 'left',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sap-cloud-sdk'
            },
            {
              label: 'GitHub JavaScript',
              href: 'https://github.com/SAP/cloud-sdk-js/issues/new/choose'
            },
            {
              label: ' GitHub Java',
              href: 'https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=Java&template=sap-cloud-sdk-for-java-issue.md&title='
            },
            {
              label: 'Support Details',
              to: 'docs/overview/get-support'
            }
          ]
        },
        {
          label: 'Release Notes',
          position: 'left',
          items: [
            {
              label: 'Java',
              to: 'docs/java/release-notes-sap-cloud-sdk-for-java'
            },
            {
              label: 'JavaScript/TypeScript',
              to: 'docs/js/release-notes-sap-cloud-sdk-for-javascript-and-typescript'
            }
          ]
        },
        {
          label: 'Maven Central',
          href: 'https://search.maven.org/search?q=g:com.sap.cloud.sdk*',
          position: 'left'
        },
        {
          label: 'npm',
          position: 'left',
          items: [
            {
              label: 'Core Modules',
              href: 'https://www.npmjs.com/search?q=sap-cloud-sdk*'
            },
            {
              label: 'SAP S/4HANA Cloud',
              href: 'https://www.npmjs.com/search?q=sap%2Fsap-cloud-vdm*'
            },
            {
              label: 'SAP S/4HANA On-Premise',
              href: 'https://www.npmjs.com/search?q=sap%2Fsap-cloud-op*'
            }
          ]
        },
        {
          label: 'Feature Matrix',
          position: 'left',
          to: 'docs/overview/cloud-sdk-feature-matrix'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'SAP Cloud SDK overview',
              to: 'docs/overview/overview-cloud-sdk'
            },
            {
              label: 'SAP Cloud SDK for Java',
              to: 'docs/java/getting-started'
            },
            {
              label: 'SAP Cloud SDK for JS',
              to: 'docs/js/getting-started'
            },
            {
              label: 'SAP Cloud SDK Tutorials',
              href: 'https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk'
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
              label: 'SAP Developers Portal',
              href: 'https://developers.sap.com/topics/cloud-sdk.html'
            },
            {
              label: 'SAP Cloud SDK Community Page',
              href: 'https://community.sap.com/topics/cloud-sdk'
            },
            {
              label: 'SAP Cloud SDK on SAP Help',
              href: 'https://help.sap.com/viewer/product/SAP_CLOUD_SDK/1.0/en-US?task=discover_task'
            }
          ]
        },
        {
          title: 'Package Repositories',
          items: [
            {
              label: 'SAP Cloud SDK for JavaScript',
              href: 'https://www.npmjs.com/search?q=%40sap-cloud-sdk'
            },
            {
              label: 'Typescript client libraries for SAP S/4HANA',
              href: 'https://www.npmjs.com/search?q=%40sap%2Fcloud-sdk-vdm-*'
            },
            {
              label: 'SAP Cloud SDK for Java',
              href: 'https://search.maven.org/search?q=g:com.sap.cloud.sdk*'
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
          remarkPlugins: [require('mdx-mermaid')],
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/SAP/cloud-sdk/edit/main',
          routeBasePath: 'docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5
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
