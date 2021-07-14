import React from 'react';
import JsSdkVersionList from '../../../static/api/versions';

function LinkToLatestJsApiDocs({ slug, name }) {
  return (
    <a
      href={`https://sap.github.io/cloud-sdk/api/${JsSdkVersionList[0]}/${slug}`}
    >
      {name}
    </a>
  );
}

export default LinkToLatestJsApiDocs;
