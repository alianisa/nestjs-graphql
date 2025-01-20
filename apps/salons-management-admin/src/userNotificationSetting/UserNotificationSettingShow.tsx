import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";

import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const UserNotificationSettingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="Appointment Reminders"
          source="appointmentReminders"
        />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Email Enabled" source="emailEnabled" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="Promotional Notifications"
          source="promotionalNotifications"
        />
        <BooleanField label="Push Enabled" source="pushEnabled" />
        <BooleanField label="Sms Enabled" source="smsEnabled" />
        <BooleanField label="Status Updates" source="statusUpdates" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField
          label="User Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
