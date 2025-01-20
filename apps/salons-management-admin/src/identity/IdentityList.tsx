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

export const IdentityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Identities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Identity Data" source="identityData" />
        <TextField label="Last Sign In At" source="lastSignInAt" />
        <TextField label="Provider" source="provider" />
        <TextField label="Provider Id" source="providerId" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
