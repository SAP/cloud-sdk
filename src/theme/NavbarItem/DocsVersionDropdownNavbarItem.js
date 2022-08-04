import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { shouldShow, hasMoreThanOneVersion } from './helper';
import HtmlNavbarItem from '@theme-original/NavbarItem/HtmlNavbarItem';


export default function DocsVersionDropdownNavbarItemWrapper(props) {
  if (shouldShow(props)) {
    if(hasMoreThanOneVersion(props.docsPluginId)){
      return <DocsVersionDropdownNavbarItem {...props} />;
    } else {
      const label = useActiveDocContext(props.docsPluginId).activeVersion.label;
      const newProps = {
        position: "right",
        value:`<button>${label}</button>`
      }
     return <HtmlNavbarItem {...newProps} />
    }
  }

  return null;
}
