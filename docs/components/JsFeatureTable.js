import React from 'react';
import ReactMarkdown from 'react-markdown';
import { jsFeatureTableLayout } from './data/table-layouts'; // Table layour for JS feature matrix with bindings
import { features } from './data/features';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';
import Table from './Table';

/**
 * Generates a feature-table for JS
 * Data (features.js) and Columns layout (table-layour.js) come from the `data` folder.
 *
 */
export default function JsFeatureTable() {
  const data = React.useMemo(() => features, []);
  const columns = React.useMemo(() => jsFeatureTableLayout, []);

  return (
    <>
      <ReactMarkdown remarkPlugins={[gfm, emoji]}>
        **Legend:** :heavy_check_mark: - Generally Available, :x: - Not
        Available, :gear: - Beta, :date: - Planned
      </ReactMarkdown>
      <Table columns={columns} data={data} />
    </>
  );
}
