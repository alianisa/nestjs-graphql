import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";

export const MfaAmrClaimCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="Authentication Method"
          source="authenticationMethod"
        />
        <DateTimeInput label="Created At" source="createdAt" />
        <ReferenceInput
          source="sessions.id"
          reference="Session"
          label="Sessions"
        >
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
