import React from 'react';
import JsSdkVersionList from '../../../static/api/versions';

function LinkToLatestJsApiDocs({ slug, name }) {
  return <a href={`/cloud-sdk/api/${JsSdkVersionList[0]}/${slug}`}>{name}</a>;
}

export default LinkToLatestJsApiDocs;
