import React from 'react';
import ExpandSelectContent from './expand-select.mdx';
import FilterOneToManyContent from './filter-one-to-many.mdx';
import FilterParentChildContent from './filter-parent-child.mdx';
import SelectContent from './select.mdx';
import SubqueriesInExpandContent from './subqueries-in-expand.mdx';
import FunctionImportKnownIssuesContent from './function-import-known-issues.mdx';
import ChangeSetExampleContent from './changeset-example.mdx';
import RequestBuilderContent from './request-builder.mdx';

export function ExpandSelect() {
  return <ExpandSelectContent />;
}

export function FilterOneToMany() {
  return <FilterOneToManyContent />;
}

export function FilterParentChild() {
  return <FilterParentChildContent />;
}

export function Select() {
  return <SelectContent />;
}

export function SubqueriesInExpand() {
  return <SubqueriesInExpandContent />;
}

export function FunctionImportKnownIssues() {
  return <FunctionImportKnownIssuesContent />;
}

export function ChangeSetExample() {
  return <ChangeSetExampleContent />;
}

export function RequestBuilder() {
  return <RequestBuilderContent />;
}
