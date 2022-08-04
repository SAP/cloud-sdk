import React from 'react';
import { shouldShow } from './helper';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import sdkVersions from '@site/static/api/versions';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DropdownNavbarItemWrapper(props) {
    if (shouldShow(props) && props.apiReference) {
      const newProps = {
        ...props,
        items: sdkVersions.reduce((prevArray, version) => {
          return [
            ...prevArray,
            {
              label: version,
              href: useBaseUrl(`api/${version}/`)
            }
          ]
        }, []) // use reduce algorithm here to return an array of all versions with the form of {label: 2.6.0, href={useBaseUrl(api/${version}/`)}>{`${version}`}}
      }
      return <DropdownNavbarItem {...newProps} />;
    }
    return <DropdownNavbarItem {...props} />;
}
