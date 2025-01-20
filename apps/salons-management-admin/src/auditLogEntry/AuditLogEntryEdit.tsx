import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AuditLogEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Instance Id" source="instanceId" />
        <TextInput label="Ip Address" source="ipAddress" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
