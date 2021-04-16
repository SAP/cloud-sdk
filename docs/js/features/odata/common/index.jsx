import React from 'react';
import CsrfContent from './csrf-token.mdx';
import SkipCsrfContent from './skip-csrf-token.mdx';
import SkipCsrfExampleContent from './skip-csrf-token-example.mdx';
import EtagContent from './etag.mdx';

export function Csrf() {
  return <CsrfContent />;
}

export function SkipCsrf() {
  return <SkipCsrfContent />;
}

export function SkipCsrfExample() {
  return <SkipCsrfExampleContent />;
}

export function Etag() {
  return <EtagContent />;
}
