import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserGenderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserGenders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />{" "}
      </Datagrid>
    </List>
  );
};
