import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MFAFACTOR_TITLE_FIELD } from "./MfaFactorTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MfaFactorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Web Authn Credential" source="webAuthnCredential" />
        <ReferenceManyField
          reference="MfaChallenge"
          target="factor_id"
          label="MfaChallenges"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Created At" source="createdAt" />
            <TextField label="ID" source="id" />
            <TextField label="Ip Address" source="ipAddress" />
            <ReferenceField
              label="Mfa Factors"
              source="mfafactor.id"
              reference="MfaFactor"
            >
              <TextField source={MFAFACTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Otp Code" source="otpCode" />
            <TextField label="Verified At" source="verifiedAt" />
            <TextField
              label="Web Authn Session Data"
              source="webAuthnSessionData"
            />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
