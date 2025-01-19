import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SSOPROVIDER_TITLE_FIELD } from "./SsoProviderTitle";
import { FLOWSTATE_TITLE_FIELD } from "../flowState/FlowStateTitle";

export const SsoProviderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <TextField label="Resource Id" source="resourceId" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="SamlProvider"
          target="sso_provider_id"
          label="SamlProviders"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Attribute Mapping" source="attributeMapping" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Entity Id" source="entityId" />
            <TextField label="ID" source="id" />
            <TextField label="Metadata Url" source="metadataUrl" />
            <TextField label="Metadata Xml" source="metadataXml" />
            <TextField label="Name Id Format" source="nameIdFormat" />
            <ReferenceField
              label="Sso Providers"
              source="ssoprovider.id"
              reference="SsoProvider"
            >
              <TextField source={SSOPROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SamlRelayState"
          target="sso_provider_id"
          label="SamlRelayStates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Created At" source="createdAt" />
            <ReferenceField
              label="Flow State"
              source="flowstate.id"
              reference="FlowState"
            >
              <TextField source={FLOWSTATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="For Email" source="forEmail" />
            <TextField label="ID" source="id" />
            <TextField label="Redirect To" source="redirectTo" />
            <TextField label="Request Id" source="requestId" />
            <ReferenceField
              label="Sso Providers"
              source="ssoprovider.id"
              reference="SsoProvider"
            >
              <TextField source={SSOPROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SsoDomain"
          target="sso_provider_id"
          label="SsoDomains"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Created At" source="createdAt" />
            <TextField label="Domain" source="domain" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Sso Providers"
              source="ssoprovider.id"
              reference="SsoProvider"
            >
              <TextField source={SSOPROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
