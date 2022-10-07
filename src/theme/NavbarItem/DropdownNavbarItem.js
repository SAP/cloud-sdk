import React from 'react';
import { containsCurrentDocsPluginId } from './helper';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import sdkVersions from '@site/static/api/versions';
import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';

/**
 * If the dropdown navbar item contains the apiReference prop,
 * the wrapper overwrites its default `items` value with all versions matching the currently selected major version.
 */
export default function DropdownNavbarItemWrapper(props) {
  let newProps = null;
  if (containsCurrentDocsPluginId(props) && props.apiReference) {
    const currentSelectedVersion = useActiveVersion(props.docsPluginId)
      .label[1];
    newProps = {
      ...props,
      items: sdkVersions
        .filter(version => {
          const majorVersion = version[0];
          return majorVersion === currentSelectedVersion;
        })
        .map(version => {
          return {
            label: version,
            href: `https://sap.github.io/cloud-sdk/api/${version}/`
          };
        })
    };
  } else {
    newProps = props;
  }

  return newProps?.items?.length ? <DropdownNavbarItem {...newProps} /> : null;
}
