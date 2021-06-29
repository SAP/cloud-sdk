import OriginalTOC from '@theme-original/TOC';
import React from 'react';
import DocsRating from '../sap/common-utils/DocsRating'

// taken from https://github.com/facebook/docusaurus/blob/41b78466dabd1e2ee5c39672a4ee44030999eada/packages/docusaurus-theme-classic/src/theme/TOC/index.tsx#L20
const LINK_CLASS_NAME = 'table-of-contents__link';

function Headings({
  toc,
  isChild,
}) {
  if (!toc.length) {
    return null;
  }
  return (
    <ul
      className={
        isChild ? '' : 'table-of-contents table-of-contents__left-border'
      }>
      {toc.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <Headings isChild toc={heading.children} />
        </li>
      ))}
    </ul>
  );
}

export default function TOC(props) {
  return (
    <>
      <div class="toc-wrapper">
        <div>
          <Headings toc={props.toc} />
        </div>
        <DocsRating />
      </div>
    </>
  );
}