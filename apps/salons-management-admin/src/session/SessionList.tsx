import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Sessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Aal" source="aal" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Factor Id" source="factorId" />
        <TextField label="ID" source="id" />
        <TextField label="Ip" source="ip" />
        <TextField label="Not After" source="notAfter" />
        <TextField label="Refreshed At" source="refreshedAt" />
        <TextField label="Tag" source="tag" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="User Agent" source="userAgent" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
