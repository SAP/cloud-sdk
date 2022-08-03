import React from 'react';
import { shouldShow } from './helper';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import ApiReleaseList from '@site/src/sap/sdk-js/ApiReleaseList';
import sdkVersions from '@site/static/api/versions';

export default function DropdownNavbarItemWrapper(props) {
    if (shouldShow(props)) {
      //<ApiReleaseList versions={sdkVersions} basePath={'api'} />
      console.log(props);
      return <DropdownNavbarItem {...props} />;
    }
    return null;
}
