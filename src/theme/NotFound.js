import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found'
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">Page Not Found</h1>
              <p>
                The page you were looking for may have been moved or renamed.
                Check that you are looking at the right language and the correct
                version. Our search can also help.
              </p>
              <p>
                If you were looking for the API reference of the SAP Cloud SDK
                for AI for JavaScript, you can find the latest version{' '}
                <a href="https://sap.github.io/cloud-sdk/api/latest/">here</a>.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
