module.exports = {
  docsJavaSidebar: [
    'overview-cloud-sdk-for-java',
    'getting-started',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/connecting-to-ai-core',
        'guides/ai-core-deployment',
        'guides/openai-chat-completion',
        'guides/orchestration-chat-completion',
        'guides/spring-ai-integration'
      ]
    },
    'release-notes',
    'frequently-asked-questions',
    {
      type: 'link',
      label: 'Maven Central',
      href: 'https://central.sonatype.com/search?q=g:com.sap.cloud.sdk*&smo=true'
    }
  ]
};
