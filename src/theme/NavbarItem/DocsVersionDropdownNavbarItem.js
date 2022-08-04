import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { shouldShow, hasMoreThanOneVersion } from './helper';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  if (shouldShow(props)) {
    if(hasMoreThanOneVersion(props.docsPluginId)){
      return <DocsVersionDropdownNavbarItem {...props} />;
    } else {

    }
  }

  return null;
}
