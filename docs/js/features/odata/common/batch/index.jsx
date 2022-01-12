import React from 'react';
import BatchIntroContent from './batch-intro.mdx';
import ChangeSetContent from './changeset.mdx';
import CombiningRequestsContent from './combining-requests.mdx';
import SerializationContent from './serialization.mdx';
import RetrieveRequestsContent from './retrieve-request.mdx';
import ResponsesContent from './responses.mdx';
import ConfigureSerializationContent from './configure-serialization.mdx';

export function BatchIntro() {
  return <BatchIntroContent />;
}

export function ChangeSet() {
  return <ChangeSetContent />;
}

export function CombiningRequests() {
  return <CombiningRequestsContent />;
}

export function ConfigureSerialization() {
  return <ConfigureSerializationContent />;
}

export function RetrieveRequests() {
  return <RetrieveRequestsContent />;
}

export function Responses() {
  return <ResponsesContent />;
}

export function Serialization() {
  return <SerializationContent />;
}
