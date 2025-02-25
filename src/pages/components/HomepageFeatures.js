import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: <>SAP Cloud SDK for AI Java</>,
    link: 'docs/java/getting-started',
    Svg: () => <span style={{ fontSize: '200px' }}>☕️</span>,
    badge: (
      <a href="https://central.sonatype.com/search?smo=true&namespace=com.sap.ai.sdk">
        <img alt="Maven Central Version" src="https://img.shields.io/maven-central/v/com.sap.ai.sdk/core?color=dark-green" />
      </a>
    ),
    description: (
      <div data-nosnippet>
        The SAP Cloud SDK for AI Java allows you to develop, extend, and
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
    title: <>SAP Cloud SDK for AI JavaScript</>,
    link: 'docs/js/getting-started',
    Svg: () => <span style={{ fontSize: '200px' }}>🚀</span>,
    badge: (
      <img alt="NPM Version" src="https://img.shields.io/npm/v/%40sap-ai-sdk%2Fai-api?color=dark-green"/>
    ),
    description: (
      <div data-nosnippet>
        The SAP Cloud SDK for AI JavaScript helps you build cloud-based apps and
        extensions to SAP solutions using the power and flexibility of Node.js
        and its ecosystem.
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
        <a href={link} style={{ textDecoration: 'none' }}>
          <Svg alt={title} />
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
