import React from 'react';
import CustomCsrfContent from './custom-csrf-token.mdx';
import SkipCsrfExampleContent from './skip-csrf-token-example.mdx';
import ETagContent from './etag.mdx';

export function SkipCsrfExample() {
  return <SkipCsrfExampleContent />;
}

export function CustomCsrf() {
  return <CustomCsrfContent />;
}

export function ETag() {
  return <ETagContent />;
}
