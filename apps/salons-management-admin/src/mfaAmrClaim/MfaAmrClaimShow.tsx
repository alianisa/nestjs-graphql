import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const MfaAmrClaimShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Authentication Method"
          source="authenticationMethod"
        />
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Sessions"
          source="session.id"
          reference="Session"
        >
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
