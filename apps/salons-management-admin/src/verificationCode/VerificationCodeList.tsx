import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VerificationCodeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"VerificationCodes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Attempts" source="attempts" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Expires At" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="Max Attempts" source="maxAttempts" />
        <TextField label="Message Id" source="messageId" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Phone" source="phone" />
        <TextField label="Provider Id" source="providerId" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Verification Type" source="verification_type" />
        <TextField label="Verified At" source="verifiedAt" />{" "}
      </Datagrid>
    </List>
  );
};
