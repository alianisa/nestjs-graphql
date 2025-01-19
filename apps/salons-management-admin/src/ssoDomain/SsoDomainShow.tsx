import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { SSOPROVIDER_TITLE_FIELD } from "../ssoProvider/SsoProviderTitle";

export const SsoDomainShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Domain" source="domain" />
        <TextField label="ID" source="id" />
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
