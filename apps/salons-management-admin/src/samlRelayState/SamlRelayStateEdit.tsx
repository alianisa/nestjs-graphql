import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { FlowStateTitle } from "../flowState/FlowStateTitle";
import { SsoProviderTitle } from "../ssoProvider/SsoProviderTitle";

export const SamlRelayStateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <ReferenceInput
          source="flowState.id"
          reference="FlowState"
          label="Flow State"
        >
          <SelectInput optionText={FlowStateTitle} />
        </ReferenceInput>
        <TextInput label="For Email" source="forEmail" />
        <TextInput label="Redirect To" source="redirectTo" />
        <TextInput label="Request Id" source="requestId" />
        <ReferenceInput
          source="ssoProviders.id"
          reference="SsoProvider"
          label="Sso Providers"
        >
          <SelectInput optionText={SsoProviderTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
