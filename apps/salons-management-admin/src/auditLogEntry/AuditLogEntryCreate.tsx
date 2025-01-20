import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AuditLogEntryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Instance Id" source="instanceId" />
        <TextInput label="Ip Address" source="ipAddress" />
        <div />
      </SimpleForm>
    </Create>
  );
};
