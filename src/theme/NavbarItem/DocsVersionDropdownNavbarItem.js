import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { shouldShow } from './helper';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  if (shouldShow(props)) {
    return <DocsVersionDropdownNavbarItem {...props} />;
  }

  return null;
}
