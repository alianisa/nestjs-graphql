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

export const MfaFactorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MfaFactors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Factor Type" source="factor_type" />
        <TextField label="Friendly Name" source="friendlyName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Challenged At" source="lastChallengedAt" />
        <TextField label="Phone" source="phone" />
        <TextField label="Secret" source="secret" />
        <TextField label="Status" source="status" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Web Authn Aaguid" source="webAuthnAaguid" />
        <TextField
          label="Web Authn Credential"
          source="webAuthnCredential"
        />{" "}
      </Datagrid>
    </List>
  );
};
