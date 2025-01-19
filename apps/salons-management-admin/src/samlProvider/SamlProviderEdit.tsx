import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SsoProviderTitle } from "../ssoProvider/SsoProviderTitle";

export const SamlProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Entity Id" source="entityId" />
        <TextInput label="Metadata Url" source="metadataUrl" />
        <TextInput label="Metadata Xml" source="metadataXml" />
        <TextInput label="Name Id Format" source="nameIdFormat" />
        <ReferenceInput
          source="ssoProviders.id"
          reference="SsoProvider"
          label="Sso Providers"
        >
          <SelectInput optionText={SsoProviderTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
