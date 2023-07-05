import React from 'react';
import DocsVersionDropdownLink from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {
  useActiveDocContext,
  useActiveVersion,
  useVersions
} from '@docusaurus/plugin-content-docs/client';
import { containsCurrentDocsPluginId, hasMoreThanOneVersion } from './helper';
import HtmlNavbarItem from '@theme-original/NavbarItem/HtmlNavbarItem';
import NavbarNavLink from '@theme-original/NavbarItem/NavbarNavLink';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';

/**
 * Only shows the docs version dropdown if the current path matches a corresponding path in the plugin id.
 * Furthermore, only shows a single version instead of a dropdown if the current file is unique to one version.
 */
export default function DocsVersionDropdownNavbarItemWrapper(props) {
  if (!containsCurrentDocsPluginId(props)) {
    return null;
  }

  // default shows always 3 links are adjusted in NavbarNavLink.js
  return <DocsVersionDropdownNavbarItem {...props} />;
}
