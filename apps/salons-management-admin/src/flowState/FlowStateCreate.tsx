import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SamlRelayStateTitle } from "../samlRelayState/SamlRelayStateTitle";

export const FlowStateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Auth Code" source="authCode" />
        <DateTimeInput label="Auth Code Issued At" source="authCodeIssuedAt" />
        <TextInput
          label="Authentication Method"
          source="authenticationMethod"
        />
        <TextInput label="Code Challenge" source="codeChallenge" />
        <SelectInput
          source="code_challenge_method"
          label="Code Challenge Method"
          choices={[
            { label: "s256", value: "s256" },
            { label: "plain", value: "plain" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Provider Access Token" source="providerAccessToken" />
        <TextInput
          label="Provider Refresh Token"
          source="providerRefreshToken"
        />
        <TextInput label="Provider Type" source="providerType" />
        <ReferenceArrayInput
          source="samlRelayStates"
          reference="SamlRelayState"
        >
          <SelectArrayInput
            optionText={SamlRelayStateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
