import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { SESSION_TITLE_FIELD } from "./SessionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        </ReferenceField>
        <ReferenceManyField
          reference="MfaAmrClaim"
          target="session_id"
          label="MfaAmrClaims"
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
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RefreshToken"
          target="session_id"
          label="RefreshTokens"
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
            <TextField label="User Id" source="userId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
