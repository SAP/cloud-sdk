import OriginalTOC from '@theme-original/TOC';
import React from 'react';
import DocsRating from '../sap/common-utils/DocsRating';

export default function TOC(props) {
  return (
    <>
      <OriginalTOC {...props} />
      <DocsRating />
    </>
  );
}