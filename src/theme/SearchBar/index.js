import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import { useAlgoliaContextualFacetFilters } from '@docusaurus/theme-search-algolia/client';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  const location = useLocation();
  const [facetFilters, setFacetFilters] = useState([]);

  useEffect(() => {
    const path = location.pathname;
    let newFilters = [];

    if (path.includes('/docs/js/')) {
      newFilters = [['docusaurus_tag:docs-js-current']]; // Nested array
    } else if (path.includes('/docs/java/')) {
      newFilters = [['docusaurus_tag:docs-java-current']];
    }

    setFacetFilters(newFilters);
  }, [location.pathname]);

  // useAlgoliaContextualFacetFilters(facetFilters);

  return <SearchBar {...props} />;
}