import React from 'react';
import ReactMarkdown from 'react-markdown';
import emoji from 'remark-emoji';
import gfm from 'remark-gfm';
import { features } from './data/features'; // JSON Object with main SDK features
import { mainFeatureTableLayout } from './data/table-layouts'; // Table layout with bindings for main feature matrix
import Table from './Table';

/**
 * Generates a main feature-table in SDK overview.
 * Data (features.js) and Columns layout (table-layour.js) come from the `data` folder.
 *
 */
export default function FeatureTable() {
  const data = React.useMemo(() => features, []);
  const columns = React.useMemo(() => mainFeatureTableLayout, []);

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
