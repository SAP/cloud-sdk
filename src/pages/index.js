import Link from '@docusaurus/Link';
import styled from 'styled-components';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import React from 'react';
import MvnBadge from '../sap/sdk-java/MvnBadge';
import BuildBadge from '../sap/sdk-js/BuildBadge';
import LicenseBadge from '../sap/sdk-js/LicenseBadge';
import styles from './styles.module.css';

const features = [
  {
    title: <>SAP Cloud SDK for Java</>,
    link: 'docs/java/getting-started',
    imageUrl:
      'https://help.sap.com/doc/6c02295dfa8f47cf9c08a19f2e172901/1.0/en-US/logo-for-java.svg',
    badge: <MvnBadge />,
    description: (
      <>
        The SAP Cloud SDK for Java allows you to develop, extend, and
        communicate with SAP solutions SAP S/4HANA Cloud, SAP SuccessFactors,
        and many others.
        <br />
        <a href="docs/java/getting-started">
          Get started with the SDK for Java.
        </a>
      </>
    )
  },
  {
    title: <>SAP Cloud SDK for JavaScript</>,
    link: 'docs/js/getting-started',
    imageUrl:
      'https://help.sap.com/doc/2324e9c3b28748a4ae2ad08166d77675/1.0/en-US/logo-with-js.svg',
    badge: (
      <>
        <BuildBadge /> <LicenseBadge />
      </>
    ),
    description: (
      <>
        The SAP Cloud SDK for JavaScript (and TypeScript) helps you build
        cloud-based apps and extensions to SAP solutions using the power and
        flexibility of Node.js and its ecosystem.
        <br />
        <a href="docs/js/getting-started">
          Get started with the SDK for JavaScript
        </a>
      </>
    )
  }
];

let sdkFeatures = {
  js: {
    img: 'img/java-black.svg'
  },
  java: {
    img: 'img/js-black.svg'
  }
};

let FlexCol = styled.div.attrs(props => ({
  className: 'col'
}))`
  display: felx;
  align-items: center;
  justify-content: center;
`;

let SectionDividerCol = styled(FlexCol)`
  background-color: var(--ifm-color-secondary-light);
  color: var(--ifm-color-primary-dark);
`;

let FeatImg = styled.div`
  padding: 1rem;
  width: 70%;
`;

let H2 = styled.h2`
  font-size: 2.5rem;
  padding: 1.5rem;
  @media (max-width: 997px) {
    font-size: 2rem;
  }
`;

function Feature({ imageUrl, link, title, description, badge }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col', styles.feature)}>
      {imgUrl && (
        <div className="text--left">
          <a href={link}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3>{title}</h3>
      {badge || ''}
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="SAP Cloud SDK is a one stop shop for developing and extending SAP applications in a Cloud"
    >
      {/* <div className="alert alert--info" style={{textAlign: 'center', fontSize: '2em'}} role="alert">
      <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to='https://sapinsights.eu.qualtrics.com/jfe/form/SV_0pUmWpCadpoLhyZ'
            >
              <span style={{ fontSize: '2em'}}>
              Take our <strong>survey</strong> to help us improve!
              </span>
            </Link>
          </div>
     </div> */}
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/overview/getting-started')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <SectionDividerCol title="Supported Programming Languages">
          <H2>Supported Programming Languages</H2>
        </SectionDividerCol>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <SectionDividerCol title="OData Type-safe Client & Code Generator">
          <H2>OData: Type-safe Client & Code Generator</H2>
        </SectionDividerCol>

        <SectionDividerCol title="Developers to Developers Support">
          <H2>First Class Support</H2>
        </SectionDividerCol>
        <div className="container">
          <div className="row">
            <div className="col">
              <FlexCol>
                <FeatImg>
                  <img
                    src={useBaseUrl('img/feat/feat-support.svg')}
                    alt="Image alt text"
                    title="Logo Title Text 1"
                  />
                </FeatImg>
              </FlexCol>
            </div>
            <FlexCol>
              <ul>
                <li>Done by Developers for Developers!</li>
                <li>Support is 1st class citizen</li>
                <li>Public GutHub for the Issues</li>
                <li>More convenient channels</li>
              </ul>
            </FlexCol>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
