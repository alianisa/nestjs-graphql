import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const UserNotificationSettingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="Appointment Reminders"
          source="appointmentReminders"
        />
        <BooleanInput label="Email Enabled" source="emailEnabled" />
        <BooleanInput
          label="Promotional Notifications"
          source="promotionalNotifications"
        />
        <BooleanInput label="Push Enabled" source="pushEnabled" />
        <BooleanInput label="Sms Enabled" source="smsEnabled" />
        <BooleanInput label="Status Updates" source="statusUpdates" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput
          source="userProfiles.id"
          reference="UserProfile"
          label="User Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
