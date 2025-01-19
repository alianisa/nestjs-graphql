import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Aud" source="aud" />
        <TextField label="Banned Until" source="bannedUntil" />
        <TextField label="Confirmation Sent At" source="confirmationSentAt" />
        <TextField label="Confirmation Token" source="confirmationToken" />
        <TextField label="Confirmed At" source="confirmedAt" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Email" source="email" />
        <TextField label="Email Change" source="emailChange" />
        <TextField
          label="Email Change Confirm Status"
          source="emailChangeConfirmStatus"
        />
        <TextField label="Email Change Sent At" source="emailChangeSentAt" />
        <TextField
          label="Email Change Token Current"
          source="emailChangeTokenCurrent"
        />
        <TextField
          label="Email Change Token New"
          source="emailChangeTokenNew"
        />
        <TextField label="Email Confirmed At" source="emailConfirmedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Instance Id" source="instanceId" />
        <TextField label="Invited At" source="invitedAt" />
        <BooleanField label="Is Anonymous" source="isAnonymous" />
        <BooleanField label="Is Sso User" source="isSsoUser" />
        <BooleanField label="Is Super Admin" source="isSuperAdmin" />
        <TextField label="Last Sign In At" source="lastSignInAt" />
        <TextField label="Phone" source="phone" />
        <TextField label="Phone Change" source="phoneChange" />
        <TextField label="Phone Change Sent At" source="phoneChangeSentAt" />
        <TextField label="Phone Change Token" source="phoneChangeToken" />
        <TextField label="Phone Confirmed At" source="phoneConfirmedAt" />
        <TextField label="Raw App Meta Data" source="rawAppMetaData" />
        <TextField label="Raw User Meta Data" source="rawUserMetaData" />
        <TextField
          label="Reauthentication Sent At"
          source="reauthenticationSentAt"
        />
        <TextField
          label="Reauthentication Token"
          source="reauthenticationToken"
        />
        <TextField label="Recovery Sent At" source="recoverySentAt" />
        <TextField label="Recovery Token" source="recoveryToken" />
        <TextField label="Roles" source="roles" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
