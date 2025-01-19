import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const WebhookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Events"
          source="events"
          choices={[
            { label: "verification_sent", value: "verification_sent" },
            { label: "verification_verified", value: "verification_verified" },
            { label: "verification_failed", value: "verification_failed" },
            { label: "call_started", value: "call_started" },
            { label: "call_completed", value: "call_completed" },
            { label: "call_failed", value: "call_failed" },
            { label: "sms_sent", value: "sms_sent" },
            { label: "sms_delivered", value: "sms_delivered" },
            { label: "sms_failed", value: "sms_failed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Failure Count" source="failureCount" />
        <BooleanInput label="Is Active" source="isActive" />
        <DateTimeInput label="Last Success" source="lastSuccess" />
        <DateTimeInput label="Last Triggered At" source="lastTriggeredAt" />
        <div />
        <TextInput label="Secret" source="secret" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
