import React from 'react';

function MvnBadge({ align }) {
  return (
    <span className={align ? 'col text--right' : ''}>
      <a href="https://maven-badges.sml.io/maven-central/com.sap.cloud.sdk/sdk-bom">
        <img
          alt="maven central"
          src="https://maven-badges.sml.io/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"
        />
      </a>
    </span>
  );
}

export default MvnBadge;
