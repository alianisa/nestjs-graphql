import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const MfaAmrClaimList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MfaAmrClaims"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="Authentication Method"
          source="authenticationMethod"
        />
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Sessions"
          source="session.id"
          reference="Session"
        >
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
