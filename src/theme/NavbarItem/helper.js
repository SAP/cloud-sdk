import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

/**
 * Recreates the path which docusaurus created from the plugin id.
 */
export function getPathFromPluginId(docsPluginId) {
  return docsPluginId?.split('-')?.join('/');
}

/**
 * Checks if a component should be shown, by matching the current path with the path in the docsPluginId.
 */
export function containsCurrentDocsPluginId(props) {
  const activeDocContext = useActiveDocContext(props.docsPluginId);
  const docPath = activeDocContext?.activeVersion?.path;
  return docPath?.includes(getPathFromPluginId(props.docsPluginId));
}

/**
 * Checks if multiple versions of the currently selected doc context exist.
 */
export function hasMoreThanOneVersion(docsPluginId) {
  return (
    Object.keys(useActiveDocContext(docsPluginId).alternateDocVersions).length >
    1
  );
}
