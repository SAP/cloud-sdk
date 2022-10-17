import React from 'react';
import clsx from 'clsx';
import MvnBadge from '../../sap/sdk-java/MvnBadge';
import BuildBadge from '../../sap/sdk-js/BuildBadge';
import LicenseBadge from '../../sap/sdk-js/LicenseBadge';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: <>SAP Cloud SDK for Java</>,
    link: 'docs/java/getting-started',
    Svg: require('../../../static/img/logo-java.svg').default,
    badge: <MvnBadge />,
    description: (
      <div data-nosnippet>
        The SAP Cloud SDK for Java allows you to develop, extend, and
        communicate with SAP solutions SAP S/4HANA Cloud, SAP SuccessFactors,
        and many others.
        <br />
        <a href="docs/java/getting-started">
          Get started with the SDK for Java.
        </a>
      </div>
    )
  },
  {
    title: <>SAP Cloud SDK for JavaScript</>,
    link: 'docs/js/getting-started',
    Svg: require('../../../static/img/logo-js.svg').default,
    badge: (
      <>
        <BuildBadge /> <LicenseBadge />
      </>
    ),
    description: (
      <div data-nosnippet>
        The SAP Cloud SDK for JavaScript (and TypeScript) helps you build
        cloud-based apps and extensions to SAP solutions using the power and
        flexibility of Node.js and its ecosystem.
        <br />
        <a href="docs/js/getting-started">
          Get started with the SDK for JavaScript
        </a>
      </div>
    )
  }
];

function Feature({ Svg, link, badge, title, description }) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {badge || ''}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
