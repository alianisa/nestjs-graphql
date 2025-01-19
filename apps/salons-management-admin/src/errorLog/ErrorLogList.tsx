import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ErrorLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ErrorLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Error Context" source="errorContext" />
        <TextField label="Error Detail" source="errorDetail" />
        <TextField label="Error Hint" source="errorHint" />
        <TextField label="Error Message" source="errorMessage" />
        <TextField label="Function Name" source="functionName" />
        <TextField label="ID" source="id" />{" "}
      </Datagrid>
    </List>
  );
};
