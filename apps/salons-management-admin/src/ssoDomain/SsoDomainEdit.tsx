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

export const SsoDomainEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Domain" source="domain" />
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
