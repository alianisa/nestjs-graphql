import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { FLOWSTATE_TITLE_FIELD } from "../flowState/FlowStateTitle";
import { SSOPROVIDER_TITLE_FIELD } from "../ssoProvider/SsoProviderTitle";

export const SamlRelayStateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
