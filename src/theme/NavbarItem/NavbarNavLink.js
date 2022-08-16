import React from 'react';
import NavbarNavLink from '@theme-original/NavbarItem/NavbarNavLink';

import {
  useActiveVersion,
  useLatestVersion
} from '@docusaurus/plugin-content-docs/client';

import { shouldShow } from './helper';

/**
 * If the navbar nav link doesn't correspond to a specific language (java/js) and therefore has no docs plugin id,
 * the wrapper won't change anything.
 * If it does contain a plugin id it will change the default link to point at the correct version of the docs.
 * (E.g. if you are browsing version 1 of the docs, you won't be redirected to version 2)
 */
export default function NavbarNavLinkWrapper(props) {
  if (!props.docsPluginId) {
    return <NavbarNavLink {...props} />;
  }

  if (props.sdkSwitch || shouldShow(props)) {
    const version =
      useActiveVersion(props.docsPluginId) ||
      useLatestVersion(props.docsPluginId);
    const docId = props.docId || version?.mainDocId;
    const to = `${version?.path}/${docId}`;
    const newProps = version ? { ...props, to } : props;

    return <NavbarNavLink {...newProps} />;
  }

  return null;
}
