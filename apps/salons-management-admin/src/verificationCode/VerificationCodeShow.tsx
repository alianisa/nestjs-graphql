import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const VerificationCodeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Attempts" source="attempts" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Expires At" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="Max Attempts" source="maxAttempts" />
        <TextField label="Message Id" source="messageId" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Phone" source="phone" />
        <TextField label="Provider Id" source="providerId" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Verification Type" source="verification_type" />
        <TextField label="Verified At" source="verifiedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
