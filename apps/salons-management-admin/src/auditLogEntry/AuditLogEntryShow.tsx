import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AuditLogEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <TextField label="Instance Id" source="instanceId" />
        <TextField label="Ip Address" source="ipAddress" />
        <TextField label="Payload" source="payload" />
      </SimpleShowLayout>
    </Show>
  );
};
