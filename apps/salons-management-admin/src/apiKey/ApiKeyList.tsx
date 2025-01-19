import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApiKeyList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"ApiKeys"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Api Key" source="apiKey" />
        <TextField label="ID" source="id" />{" "}
      </Datagrid>
    </List>
  );
};
