import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { MfaAmrClaimTitle } from "../mfaAmrClaim/MfaAmrClaimTitle";
import { RefreshTokenTitle } from "../refreshToken/RefreshTokenTitle";
import { UserTitle } from "../user/UserTitle";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="aal"
          label="Aal"
          choices={[
            { label: "aal1", value: "aal1" },
            { label: "aal2", value: "aal2" },
            { label: "aal3", value: "aal3" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Factor Id" source="factorId" />
        <TextInput label="Ip" source="ip" />
        <ReferenceArrayInput source="mfaAmrClaims" reference="MfaAmrClaim">
          <SelectArrayInput
            optionText={MfaAmrClaimTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Not After" source="notAfter" />
        <ReferenceArrayInput source="refreshTokens" reference="RefreshToken">
          <SelectArrayInput
            optionText={RefreshTokenTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Refreshed At" source="refreshedAt" />
        <TextInput label="Tag" source="tag" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="User Agent" source="userAgent" />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
