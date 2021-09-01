import React from 'react';
import ReactMarkdown from 'react-markdown';
import emoji from 'remark-emoji';
import gfm from 'remark-gfm';
import { javaFeatureTableLayout } from './data/table-layouts'; // Table layout for Java features matrix
import { features } from './data/features';
import Table from './Table';

/**
 * Generates a feature-table for Java.
 * Data (features.js) and Columns layout (table-layour.js) come from the `data` folder.
 *
 */
export default function JavaFeatureTable() {
  const data = React.useMemo(() => features, []);
  const columns = React.useMemo(() => javaFeatureTableLayout, []);

  return (
    <>
      <ReactMarkdown plugins={[gfm, emoji]}>
        **Legend:** :heavy_check_mark: - Generally Available, :x: - Not
        Available, :cog: - Beta, :date: - Planned
      </ReactMarkdown>
      <Table columns={columns} data={data} />
    </>
  );
}
