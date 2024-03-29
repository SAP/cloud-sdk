import React from 'react';
import CustomFieldsContent from './custom-fields.mdx';
import CustomDeSerializersContent from './custom-de-serializers.mdx';
import DeserializeEntityContent from './deserialize-entity.mdx';
import SerializeEntityContent from './serialize-entity.mdx';
import EntityBuilderContent from './entity-builder.mdx';
import EntityContent from './entity.mdx';
import FromJsonContent from './from-json.mdx';

export function CustomFields() {
  return <CustomFieldsContent />;
}

export function CustomDeSerializers() {
  return <CustomDeSerializersContent />;
}

export function DeserializeEntity() {
  return <DeserializeEntityContent />;
}

export function SerializeEntity() {
  return <SerializeEntityContent />;
}

export function EntityBuilder() {
  return <EntityBuilderContent />;
}

export function Entity() {
  return <EntityContent />;
}

export function FromJson() {
  return <FromJsonContent />;
}
