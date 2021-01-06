import React from 'react';
import ReactMarkdown from 'react-markdown';
import { jsFeatureTableLayout } from './data/table-layouts'; // Table layour for JS feature matrix with bindings
import { features } from './data/features';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';
import Table from './Table';

export default function JsFeatureTable() {
  const data = React.useMemo(() => features, []);
  const columns = React.useMemo(() => jsFeatureTableLayout, []);

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
