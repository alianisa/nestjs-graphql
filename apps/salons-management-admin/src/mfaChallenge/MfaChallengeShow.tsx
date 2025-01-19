import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { MFAFACTOR_TITLE_FIELD } from "../mfaFactor/MfaFactorTitle";

export const MfaChallengeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
