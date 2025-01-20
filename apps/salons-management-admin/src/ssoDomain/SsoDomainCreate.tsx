import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SsoProviderTitle } from "../ssoProvider/SsoProviderTitle";

export const SsoDomainCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
