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
import { features } from '../sap/sdk-data/data';

const UL = styled.ul`
  font-size: 1.8rem;
`;

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

const SdkButton = styled(Link).attrs(props => ({
  className: `button button--lg ${props.type}`
}))`
  margin-left: 0.5rem;
`;

const FeatImg = styled.div`
  padding: 1rem;
  width: 100%;
`;

const ImgBlock = styled.img`
  display: block;
`;

function sdkFeatures(features) {
  let counter = 0;
  return features.map(feature => {
    counter++;
    return (
      <section key={counter}>
        <SectionDividerCol>
          <H2>{feature.title}</H2>
        </SectionDividerCol>
        <div className="container">
          <div className="row">
            {counter % 2 ? (
              <>
                <FlexCol>
                  <FeatImg>
                    <img src={useBaseUrl(feature.img)} />
                  </FeatImg>
                </FlexCol>
                <FlexCol>
                  <UL>
                    {feature.benefits.map(benefit => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </UL>
                </FlexCol>
              </>
            ) : (
              <>
                <FlexCol>
                  <UL>
                    {feature.benefits.map(benefit => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </UL>
                </FlexCol>
                <FlexCol>
                  <FeatImg>
                    <img src={useBaseUrl(feature.img)} />
                  </FeatImg>
                </FlexCol>
              </>
            )}
          </div>
        </div>
      </section>
    );
  });
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
            <SdkButton
              to={useBaseUrl('docs/overview/overview-cloud-sdk')}
              type="button--secondary"
            >
              Get Started
            </SdkButton>
            <SdkButton
              to="https://github.com/SAP/cloud-sdk/issues/new/choose"
              type="button--info"
            >
              Feature request
            </SdkButton>
            <SdkButton
              to="https://github.com/SAP/cloud-sdk/issues/new/choose"
              type="button--danger"
            >
              Report a bug
            </SdkButton>
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
                  alt="Typescript"
                  title="The SAP Cloud SDK for Typescript"
                />
              </a>
            </FlexCol>
          </div>
        </div>
        {sdkFeatures(features)}
      </main>
    </Layout>
  );
}

export default Home;
