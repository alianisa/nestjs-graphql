import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MetricList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Metrics"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="Metadata" source="metadata" />
        <BooleanField label="Success" source="success" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Type Field" source="typeField" />{" "}
      </Datagrid>
    </List>
  );
};
