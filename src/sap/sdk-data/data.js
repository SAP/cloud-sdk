import React from 'react';
const ghIssuesLink = 'https://github.com/SAP/cloud-sdk/issues/new/choose';

export const features = [
  {
    id: 'odata',
    title: 'OData: Type-Safe Client & Code Generator',
    benefits: [
      'Efficient OData code generator built from scratch by SDK team',
      'Fluent API for type-safe OData calls',
      'Both OData v2 and OData v4 covered',
      'Discover OData APIs from your IDE',
      `Clean code - low to no boilerplate`,
      `Kepp focus on a business logic`
    ],
    img: `img/feat/feat-type-safe-client.svg`
  },
  {
    id: 'openapi',
    title: 'OpenAPI: Type-Safe Client & Code Generator',
    benefits: [
      'Customized code generator',
      'Fluent API for type-safe OpenAPI calls',
      'OpenAPI  2.0 and 3.0',
      'Support for vendor extensions',
      `Deep integration with SDK's features`
    ],
    img: `img/feat/feat-openapi2.svg`
  },
  {
    id: 'btp',
    title: 'Seamless Support for the SAP Business Technology Platform',
    benefits: [
      'Automated handling connectivity ',
      'Embedded multi-tenancy',
      'Support all authentication flows',
      'Multiple runtimes covered',
      'Cloud to On-Premise connetivity',
      'Advance Cloud quality patterns'
    ],
    img: `img/feat/feat-btp-cloud.svg`
  },
  {
    id: 'clients',
    title: 'Pre-Generated Type-Safe Client Libraries',
    benefits: [
      'SAP S/4HANA Cloud, SAP S/4HANA On-Premise, Workflow and more...',
      <>
        Find then on{' '}
        <a href="https://search.maven.org/search?q=g:com.sap.cloud.sdk*">
          Maven Central
        </a>
      </>,
      <>
        Also on npm{' '}
        <a href="https://www.npmjs.com/search?q=sap%2Fsap-cloud-vdm*">here</a>{' '}
        and{' '}
        <a href="https://www.npmjs.com/search?q=sap%2Fsap-cloud-op*">here</a>
      </>
    ],
    img: `img/feat/feat-code.svg`
  },
  {
    id: 'bas',
    title: 'Enjoy Coding with Business Application Studio - BAS',
    benefits: [
      <>
        Both Java and Typescript/JavaScript SDKs support{' '}
        <a href="https://developers.sap.com/tutorials/appstudio-onboarding.html">
          Business Application Studio
        </a>
      </>,
      'Code you application without leaving your browser',
      'Connect your repository directly to BAS'
    ],
    img: `img/feat/feat-bas.svg`
  },
  {
    id: 'support',
    title: 'First Class Support',
    benefits: [
      'We take support seriously',
      'By Developers for Developers',
      'Quick and proactive response',
      <>
        <a href={ghIssuesLink}>Public GitHub Issue</a> for convenience
      </>
    ],
    img: `img/feat/feat-support.svg`
  }
];
