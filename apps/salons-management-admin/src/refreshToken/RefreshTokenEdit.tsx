import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";

export const RefreshTokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Instance Id" source="instanceId" />
        <TextInput label="Parent" source="parent" />
        <BooleanInput label="Revoked" source="revoked" />
        <ReferenceInput
          source="sessions.id"
          reference="Session"
          label="Sessions"
        >
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <TextInput label="Token" source="token" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
