import React from 'react';
import NavbarNavLink from '@theme-original/NavbarItem/NavbarNavLink';
import {
  useActiveDocContext,
  useVersions
} from '@docusaurus/plugin-content-docs/client';

export default function NavbarNavLinkWrapper(props) {
  if (typeof props.to != "undefined" && (!props.to.includes('docs/js') || props.label === '🚀 JavaScript')) {
    return <NavbarNavLink {...props} />;
  }
  const label = props.label;
  const key = getKey(label);
  const existingDocs = getAlternateDocsKeys();
  const newProps = existingDocs.includes(key)
    ? props
    : { ...props, label: label + '🔝' };
  return <NavbarNavLink {...newProps} />;
}

function getAlternateDocsKeys() {
  return Object.keys(useActiveDocContext('docs-js').alternateDocVersions);
}

function getKey(label) {
  return useVersions('docs-js').find(o => o.label === label)?.name;
}
