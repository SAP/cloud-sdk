import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function ApiReleaseList({ versions, basePath }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">API Reference</button>
      <div className="dropdown-content">
        {versions.map((version, i) => (
            <a className="a" key={version} href={useBaseUrl(`${basePath}/${version}/`)}>{`${version}`}</a>
        ))}
      </div>
    </div>
  );
}

export default ApiReleaseList;
