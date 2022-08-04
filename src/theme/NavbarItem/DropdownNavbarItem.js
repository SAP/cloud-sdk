import React from 'react';
import { shouldShow } from './helper';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import sdkVersions from '@site/static/api/versions';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  useActiveVersion,
} from '@docusaurus/plugin-content-docs/client';

export default function DropdownNavbarItemWrapper(props) {
    if (shouldShow(props) && props.apiReference) {
      const currentVersion = useActiveVersion(props.docsPluginId).label[1];
      const newProps = {
        ...props,
        items: sdkVersions.reduce((prevArray, version) => {
          if(version[0] === currentVersion){
            return [
              ...prevArray,
              {
                label: version,
                href: useBaseUrl(`api/${version}/`)
              }
            ]
          }
          return [
            ...prevArray
          ]
        }, [])
      }
      return <DropdownNavbarItem {...newProps} />;
    }
    return <DropdownNavbarItem {...props} />;
}
