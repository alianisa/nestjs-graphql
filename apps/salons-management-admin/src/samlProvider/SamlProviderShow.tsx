import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { SSOPROVIDER_TITLE_FIELD } from "../ssoProvider/SsoProviderTitle";

export const SamlProviderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
