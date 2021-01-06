import React from 'react';
import ReactMarkdown from 'react-markdown';
import emoji from 'remark-emoji';
import gfm from 'remark-gfm';
import { features } from './data/features'; // JSON Object with main SDK features
import { mainFeatureTableLayout } from './data/table-layouts'; // Table layout with bindings for main feature matrix
import Table from './Table';

export default function FeatureTable() {
  const data = React.useMemo(() => features, []);
  const columns = React.useMemo(() => mainFeatureTableLayout, []);

  return (
    <>
      <ReactMarkdown plugins={[gfm, emoji]}>
        **Legend:** :heavy_check_mark: - Generally Available, :x: - Not
        Available, :bulb: - Beta, :gear: - Planned
      </ReactMarkdown>
      <Table columns={columns} data={data} />
    </>
  );
}
