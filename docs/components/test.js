import ReactMarkdown from 'react-markdown';
import React from 'react';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';

export default props => (
  <ReactMarkdown plugins={[gfm, emoji]}>
    lkfjalskjfaslk `ljl` :x: :heavy_check_mark:
    [abc](../java/overview-cloud-sdk-for-java)
  </ReactMarkdown>
);
