import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { shouldShow, hasMoreThanOneVersion } from './helper';
import HtmlNavbarItem from '@theme-original/NavbarItem/HtmlNavbarItem';

/**
 * Only shows the docs version dropdown if the current path matches a corresponding path in the plugin id.
 * Furthermore, only shows a single version instead of a dropdown if the current file is unique to one version.
 */
export default function DocsVersionDropdownNavbarItemWrapper(props) {
  if (shouldShow(props)) {
    if (hasMoreThanOneVersion(props.docsPluginId)) {
      return <DocsVersionDropdownNavbarItem {...props} />;
    } else {
      const label = useActiveDocContext(props.docsPluginId).activeVersion.label;
      const newProps = {
        position: 'right',
        value: `<button>${label}</button>`
      };
      return <HtmlNavbarItem {...newProps} />;
    }
  }

  return null;
}
