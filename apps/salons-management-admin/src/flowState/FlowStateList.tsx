import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FlowStateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FlowStates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Auth Code" source="authCode" />
        <TextField label="Auth Code Issued At" source="authCodeIssuedAt" />
        <TextField
          label="Authentication Method"
          source="authenticationMethod"
        />
        <TextField label="Code Challenge" source="codeChallenge" />
        <TextField
          label="Code Challenge Method"
          source="code_challenge_method"
        />
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <TextField label="Provider Access Token" source="providerAccessToken" />
        <TextField
          label="Provider Refresh Token"
          source="providerRefreshToken"
        />
        <TextField label="Provider Type" source="providerType" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="User Id" source="userId" />{" "}
      </Datagrid>
    </List>
  );
};
