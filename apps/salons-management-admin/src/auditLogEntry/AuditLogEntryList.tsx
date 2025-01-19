import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AuditLogEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AuditLogEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <TextField label="Instance Id" source="instanceId" />
        <TextField label="Ip Address" source="ipAddress" />
        <TextField label="Payload" source="payload" />{" "}
      </Datagrid>
    </List>
  );
};
