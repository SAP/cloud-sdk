import React from 'react';
import CsrfContent from './csrf-token.mdx';
import SkipCsrfExampleContent from './skip-csrf-token-example.mdx';
import EtagContent from './etag.mdx';
import DocsRating from '../../../../../src/sap/common-utils/DocsRating';


export function Csrf() {
  return <CsrfContent />;
}

export function SkipCsrfExample() {
  return <SkipCsrfExampleContent />;
}

export function Etag() {
  return <EtagContent />;
}