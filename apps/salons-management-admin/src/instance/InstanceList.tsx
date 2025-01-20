import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InstanceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Instances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <TextField label="Raw Base Config" source="rawBaseConfig" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Uuid" source="uuid" />{" "}
      </Datagrid>
    </List>
  );
};
