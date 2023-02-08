import React from 'react';
import CsrfContent from './csrf-token.mdx';
import CustomCsrfContent from './custom-csrf-token.mdx';
import SkipCsrfExampleContent from './skip-csrf-token-example.mdx';
import ETagContent from './etag.mdx';

export function Csrf() {
  return <CsrfContent />;
}

export function SkipCsrfExample() {
  return <SkipCsrfExampleContent />;
}

export function CustomCsrf() {
  return <CustomCsrfContent />;
}

export function ETag() {
  return <ETagContent />;
}
