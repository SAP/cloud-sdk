import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import MvnBadge from '../sap/sdk-java/MvnBadge';
import BuildBadge from '../sap/sdk-js/BuildBadge';
import LicenseBadge from '../sap/sdk-js/LicenseBadge';
import styled from 'styled-components';

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

const FlexCol = styled.div.attrs(props => ({
  className: 'col'
}))`
  display: felx;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  @media (max-width: 997px) {
    font-size: 2rem;
  }
  margin: 0 0 0.5rem 0;
`;

const SectionDividerCol = styled(FlexCol)`
  background-color: var(--ifm-color-secondary-light);
  color: var(--ifm-color-primary-dark);
  height: 5rem;
`;

const FeatImg = styled.div`
  padding: 1rem;
  width: 70%;
`;

const ImgBlock = styled.img`
  display: block;
`;

const UL = styled.ul`
  font-size: 1.8rem;
`;

function sdkFeature({ id, title, benefits, img }) {
  return (
    <>
      <SectionDividerCol>
        <H2>{title}</H2>
      </SectionDividerCol>
      <div className="container">
        <div className="row">
          <FlexCol>
            <FeatImg>
              <img src={img} title="Logo Title Text 1" />
            </FeatImg>
          </FlexCol>
          <FlexCol>
            <UL>
              {benefits.map(benefit => (
                <li key={benefit}>{benefit}</li>
              ))}
            </UL>
          </FlexCol>
        </div>
      </div>
    </>
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
              className={classnames('button button--secondary button--lg')}
              to={useBaseUrl('docs/overview/getting-started')}
            >
              Get Started
            </Link>
            <Link
              className={classnames(
                'button button--info button--lg',
                styles.heroButton
              )}
              to={useBaseUrl('docs/overview/getting-started')}
            >
              Feature request
            </Link>
            <Link
              className={classnames(
                'button button--danger button--lg',
                styles.heroButton
              )}
              to={useBaseUrl('docs/overview/getting-started')}
            >
              Report a bug
            </Link>
          </div>
        </div>
      </header>
      <main>
        <SectionDividerCol>
          <H2>We Support Coding in:</H2>
        </SectionDividerCol>

        <div className="container">
          <div className="row row--no-gutters">
            <FlexCol>
              <a href={useBaseUrl('docs/overview/overview-cloud-sdk')}>
                <ImgBlock
                  src={useBaseUrl('img/feat/java-square.svg')}
                  alt="Java"
                  title="The SAP Cloud SDK for Java"
                />
              </a>
            </FlexCol>
            <FlexCol>
              <a href={useBaseUrl('docs/js/overview-cloud-sdk-for-javascript')}>
                <ImgBlock
                  src={useBaseUrl('img/feat/js.svg')}
                  alt="JavaScript"
                  title="The SAP Cloud SDK for JavaScript"
                />
              </a>
            </FlexCol>
            <FlexCol>
              <a href={useBaseUrl('docs/js/overview-cloud-sdk-for-javascript')}>
                <ImgBlock
                  src={useBaseUrl('img/feat/ts.svg')}
                  alt="The SAP Cloud SDK for Typescript"
                  title="The SAP Cloud SDK for Typescript"
                />
              </a>
            </FlexCol>
          </div>
        </div>
        <SectionDividerCol title="OData Type-safe Client & Code Generator">
          <H2>OData: Type-safe Client & Code Generator</H2>
        </SectionDividerCol>

        <SectionDividerCol title="Developers to Developers Support">
          <H2>First Class Support</H2>
        </SectionDividerCol>
        <div className="container">
          <div className="row">
            <FlexCol>
              <FeatImg>
                <img
                  src={useBaseUrl('img/feat/feat-support.svg')}
                  alt="Image alt text"
                  title="Logo Title Text 1"
                />
              </FeatImg>
            </FlexCol>
            <FlexCol>
              <UL>
                <li>Done by Developers for Developers!</li>
                <li>Support is 1st class citizen</li>
                <li>Public GutHub for the Issues</li>
                <li>More convenient channels</li>
              </UL>
            </FlexCol>
          </div>
        </div>
        <SectionDividerCol title="Developers to Developers Support">
          <H2>-----------------------</H2>
        </SectionDividerCol>
      </main>
    </Layout>
  );
}

export default Home;
