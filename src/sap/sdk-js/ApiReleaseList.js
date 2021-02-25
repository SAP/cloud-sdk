import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function ApiReleaseList({ versions, basePath }) {
  return (
    <ul>
      {/* <li key="latest">
        <a href={useBaseUrl('api/latest')}>Latest</a>
      </li> */}
      {versions.map((version, i) => (
        <li key={`${version}`}>
          <a href={useBaseUrl(`${basePath}/${version}/`)}>{`${version}`}</a>
          {i ? (
            ''
          ) : (
            <strong>
              <em> - latest </em>
            </strong>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ApiReleaseList;
