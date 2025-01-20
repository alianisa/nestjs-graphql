import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SamlProviderTitle } from "../samlProvider/SamlProviderTitle";
import { SamlRelayStateTitle } from "../samlRelayState/SamlRelayStateTitle";
import { SsoDomainTitle } from "../ssoDomain/SsoDomainTitle";

export const SsoProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Resource Id" source="resourceId" />
        <ReferenceArrayInput source="samlProviders" reference="SamlProvider">
          <SelectArrayInput
            optionText={SamlProviderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
        <ReferenceArrayInput source="ssoDomains" reference="SsoDomain">
          <SelectArrayInput
            optionText={SsoDomainTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
