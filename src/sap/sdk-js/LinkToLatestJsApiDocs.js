import React from 'react';
import JsSdkVersionList from '../../../static/api/versions';
import Link from '@docusaurus/Link';

function LinkToLatestJsApiDocs({ slug, name }) {
  return <Link to={`/api/${JsSdkVersionList[0]}/${slug}`}>{name}</Link>;
}

export default LinkToLatestJsApiDocs;
