import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { MfaChallengeTitle } from "../mfaChallenge/MfaChallengeTitle";
import { UserTitle } from "../user/UserTitle";

export const MfaFactorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <SelectInput
          source="factor_type"
          label="Factor Type"
          choices={[
            { label: "totp", value: "totp" },
            { label: "webauthn", value: "webauthn" },
            { label: "phone", value: "phone" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Friendly Name" source="friendlyName" />
        <DateTimeInput label="Last Challenged At" source="lastChallengedAt" />
        <ReferenceArrayInput source="mfaChallenges" reference="MfaChallenge">
          <SelectArrayInput
            optionText={MfaChallengeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <TextInput label="Secret" source="secret" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "unverified", value: "unverified" },
            { label: "verified", value: "verified" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Web Authn Aaguid" source="webAuthnAaguid" />
        <div />
      </SimpleForm>
    </Create>
  );
};
