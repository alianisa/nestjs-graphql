import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FLOWSTATE_TITLE_FIELD } from "./FlowStateTitle";
import { SSOPROVIDER_TITLE_FIELD } from "../ssoProvider/SsoProviderTitle";

export const FlowStateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Auth Code" source="authCode" />
        <TextField label="Auth Code Issued At" source="authCodeIssuedAt" />
        <TextField
          label="Authentication Method"
          source="authenticationMethod"
        />
        <TextField label="Code Challenge" source="codeChallenge" />
        <TextField
          label="Code Challenge Method"
          source="code_challenge_method"
        />
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <TextField label="Provider Access Token" source="providerAccessToken" />
        <TextField
          label="Provider Refresh Token"
          source="providerRefreshToken"
        />
        <TextField label="Provider Type" source="providerType" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="User Id" source="userId" />
        <ReferenceManyField
          reference="SamlRelayState"
          target="flow_state_id"
          label="SamlRelayStates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Created At" source="createdAt" />
            <ReferenceField
              label="Flow State"
              source="flowstate.id"
              reference="FlowState"
            >
              <TextField source={FLOWSTATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="For Email" source="forEmail" />
            <TextField label="ID" source="id" />
            <TextField label="Redirect To" source="redirectTo" />
            <TextField label="Request Id" source="requestId" />
            <ReferenceField
              label="Sso Providers"
              source="ssoprovider.id"
              reference="SsoProvider"
            >
              <TextField source={SSOPROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
