import React from 'react';
import ReactMarkdown from 'react-markdown';
import emoji from 'remark-emoji';
import gfm from 'remark-gfm';
import { BTPEnvironmentsJava } from './data/table-layouts'; // Table layout for Java features matrix
import { features } from './data/features';
import Table from './Table';

/**
 * Generates a feature-table for Java.
 * Data (features.js) and Columns layout (table-layour.js) come from the `data` folder.
 *
 */
export default function JavaEnvironmentTable() {
  const envs = features.filter(feature => feature.category === 'Environment');
  const data = React.useMemo(() => envs, []);
  const columns = React.useMemo(() => BTPEnvironmentsJava, []);

  return (
    <>
      <ReactMarkdown plugins={[gfm, emoji]}>
        **Legend:** :heavy_check_mark: - Generally Available, :x: - Not
        Available, :gear: - Beta, :date: - Planned
      </ReactMarkdown>
      <Table columns={columns} data={data} />
    </>
  );
}
