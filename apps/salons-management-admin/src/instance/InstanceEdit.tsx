import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const InstanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Raw Base Config" source="rawBaseConfig" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Uuid" source="uuid" />
      </SimpleForm>
    </Edit>
  );
};
