import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const VerificationCodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Attempts" source="attempts" />
        <TextInput label="Code" source="code" />
        <DateTimeInput label="Expires At" source="expiresAt" />
        <NumberInput step={1} label="Max Attempts" source="maxAttempts" />
        <TextInput label="Message Id" source="messageId" />
        <div />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Provider Id" source="providerId" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "pending", value: "pending" },
            { label: "verified", value: "verified" },
            { label: "expired", value: "expired" },
            { label: "failed", value: "failed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="verification_type"
          label="Verification Type"
          choices={[
            { label: "sms", value: "sms" },
            { label: "call", value: "call" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Verified At" source="verifiedAt" />
      </SimpleForm>
    </Edit>
  );
};
