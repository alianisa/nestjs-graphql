import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MfaFactorTitle } from "../mfaFactor/MfaFactorTitle";

export const MfaChallengeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Ip Address" source="ipAddress" />
        <ReferenceInput
          source="mfaFactors.id"
          reference="MfaFactor"
          label="Mfa Factors"
        >
          <SelectInput optionText={MfaFactorTitle} />
        </ReferenceInput>
        <TextInput label="Otp Code" source="otpCode" />
        <DateTimeInput label="Verified At" source="verifiedAt" />
        <div />
      </SimpleForm>
    </Create>
  );
};
