import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const RefreshTokenList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"RefreshTokens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <TextField label="Instance Id" source="instanceId" />
        <TextField label="Parent" source="parent" />
        <BooleanField label="Revoked" source="revoked" />
        <ReferenceField
          label="Sessions"
          source="session.id"
          reference="Session"
        >
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Token" source="token" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="User Id" source="userId" />{" "}
      </Datagrid>
    </List>
  );
};
