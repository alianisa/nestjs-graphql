import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="username" source="username" />
        <ReferenceManyField
          reference="Identity"
          target="user_id"
          label="Identities"
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MfaFactor"
          target="user_id"
          label="MfaFactors"
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
            />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OneTimeToken"
          target="user_id"
          label="OneTimeTokens"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Relates To" source="relatesTo" />
            <TextField label="Token Hash" source="tokenHash" />
            <TextField label="Token Type" source="token_type" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="user_id"
          label="Sessions"
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
