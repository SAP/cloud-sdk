import React from 'react';
import KymaApprouterTabsContent from './kyma-approuter-tabs.mdx';
import KymaAppTabsContent from './kyma-app-tabs.mdx';
import DockerFileContent from './Dockerfile.mdx';
import OperatorDestinationServiceContent from './operator-destination-service.mdx';
import OperatorXsuaaServiceContent from './operator-xsuaa-service.mdx';
import KubernetesOnPremiseContent from './kubernetes-on-premise.mdx';

export function DockerFile() {
  return <DockerFileContent />;
}

export function OperatorDestinationService() {
  return <OperatorDestinationServiceContent />;
}
export function OperatorXsuaaService() {
  return <OperatorXsuaaServiceContent />;
}

export function KymaApprouterTabs() {
  return <KymaApprouterTabsContent />;
}
export function KymaAppTabs() {
  return <KymaAppTabsContent />;
}

export function KubernetesOnPremise() {
  return <KubernetesOnPremiseContent />;
}
