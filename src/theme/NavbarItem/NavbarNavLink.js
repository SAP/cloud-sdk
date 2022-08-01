import React from 'react';
import NavbarNavLink from '@theme-original/NavbarItem/NavbarNavLink';

import {
  useActiveVersion,
  useLatestVersion
} from '@docusaurus/plugin-content-docs/client';

import { shouldShow } from './helper';

export default function NavbarNavLinkWrapper(props) {
  if (!props.docsPluginId) {
    return <NavbarNavLink {...props} />;
  }

  if (props.sdkSwitch || shouldShow(props)) {
    const v =
      useActiveVersion(props.docsPluginId) ||
      useLatestVersion(props.docsPluginId);
    const docId = props.docId || v?.mainDocId;
    const to = `${v?.path}/${docId}`;
    const newProps = v ? { ...props, to } : props;

    return <NavbarNavLink {...newProps} />;
  }

  return null;
}
