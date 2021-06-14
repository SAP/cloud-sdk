import React from 'react';

function BuildBadge({ align }) {
  return (
    <span className={align ? 'col text--right' : ''}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/SAP/cloud-sdk-js"
      >
        <img
          src="https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg"
          alt="build"
          className="max-width:100%;"
        />
      </a>
    </span>
  );
}

export default BuildBadge;
