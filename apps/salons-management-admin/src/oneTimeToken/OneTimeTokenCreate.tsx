import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const OneTimeTokenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Relates To" source="relatesTo" />
        <TextInput label="Token Hash" source="tokenHash" />
        <SelectInput
          source="token_type"
          label="Token Type"
          choices={[
            { label: "confirmation_token", value: "confirmation_token" },
            {
              label: "reauthentication_token",
              value: "reauthentication_token",
            },
            { label: "recovery_token", value: "recovery_token" },
            {
              label: "email_change_token_new",
              value: "email_change_token_new",
            },
            {
              label: "email_change_token_current",
              value: "email_change_token_current",
            },
            { label: "phone_change_token", value: "phone_change_token" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
