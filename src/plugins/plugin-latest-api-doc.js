/**
 * @prop latestBaseUrl - Base URL for the latest version. Must not have a trailing slash.
 * @prop versions - Reference to the `versions.json` file relative to the `.docusaurus` directory.
 */
async function apiDocPlugin(context, { latestBaseUrl, versions }) {
  return {
    name: 'sap-cloud-sdk-api-doc-plugin',

    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;
      const baseUrlJson = await createData(
        'latestBaseUrl.json',
        `"${latestBaseUrl}"`
      );

      addRoute({
        path: `${latestBaseUrl}*`,
        component: '@site/src/components/LatestApiDoc.js',
        modules: {
          latestBaseUrl: baseUrlJson,
          versions
        },
        exact: false
      });
    }
  };
}

module.exports = apiDocPlugin;
