import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const InstanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Raw Base Config" source="rawBaseConfig" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Uuid" source="uuid" />
      </SimpleForm>
    </Create>
  );
};
