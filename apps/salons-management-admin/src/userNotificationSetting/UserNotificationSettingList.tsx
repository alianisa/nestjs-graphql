import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const UserNotificationSettingList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserNotificationSettings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
