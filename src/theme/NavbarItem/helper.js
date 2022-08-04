import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

export function getPathFromPluginId(docsPluginId) {
  return docsPluginId?.split('-')?.join('/');
}

export function shouldShow(props) {
  const activeDocContext = useActiveDocContext(props.docsPluginId);
  const docPath = activeDocContext?.activeVersion?.path;
  return docPath?.includes(getPathFromPluginId(props.docsPluginId));
}

export function hasMoreThanOneVersion(docsPluginId) {
  return Object.keys(useActiveDocContext(docsPluginId).alternateDocVersions).length > 1;
}
