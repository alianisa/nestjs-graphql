import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const WebhookList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Webhooks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Events" source="events" />
        <TextField label="Failure Count" source="failureCount" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Last Success" source="lastSuccess" />
        <TextField label="Last Triggered At" source="lastTriggeredAt" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Secret" source="secret" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />{" "}
      </Datagrid>
    </List>
  );
};
