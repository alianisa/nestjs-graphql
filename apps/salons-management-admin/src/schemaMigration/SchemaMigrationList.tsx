import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SchemaMigrationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SchemaMigrations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />{" "}
      </Datagrid>
    </List>
  );
};
