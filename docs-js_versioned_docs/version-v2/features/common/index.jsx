import React from 'react';
import CustomRequestConfigContent from './custom-request-config.mdx';
import CustomRequestConfigNoteContent from './custom-request-config-note.mdx';
import ExecuteRawOverviewContent from './execute-raw-overview.mdx';
import ExecuteRawUseCasesContent from './execute-raw-use-cases.mdx';
import SkipCsrfContent from './skip-csrf-token.mdx';

export function CustomRequestConfig() {
  return <CustomRequestConfigContent />;
}

export function CustomRequestConfigNote() {
  return <CustomRequestConfigNoteContent />;
}

export function ExecuteRawOverview() {
  return <ExecuteRawOverviewContent />;
}

export function ExecuteRawUseCases() {
  return <ExecuteRawUseCasesContent />;
}

export function SkipCsrf() {
  return <SkipCsrfContent />;
}
