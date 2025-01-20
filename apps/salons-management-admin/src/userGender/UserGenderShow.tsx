import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { USERGENDER_TITLE_FIELD } from "./UserGenderTitle";
import { USERNOTIFICATIONSETTING_TITLE_FIELD } from "../userNotificationSetting/UserNotificationSettingTitle";

export const UserGenderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <ReferenceManyField
          reference="UserProfile"
          target="gender"
          label="UserProfiles"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Avatar Url" source="avatarUrl" />
            <TextField label="Bio" source="bio" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Date Of Birth" source="dateOfBirth" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Email" source="email" />
            <TextField
              label="Employee Dismissal At"
              source="employeeDismissalAt"
            />
            <TextField
              label="Employee Employment At"
              source="employeeEmploymentAt"
            />
            <TextField label="First Name" source="firstName" />
            <TextField label="Full Name" source="fullName" />
            <BooleanField label="Full Registered" source="fullRegistered" />
            <TextField label="Hired Date" source="hiredDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Admin" source="isAdmin" />
            <BooleanField label="Is Barber" source="isBarber" />
            <BooleanField label="Is Employee" source="isEmployee" />
            <TextField label="Job Title" source="jobTitle" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Location" source="location" />
            <TextField label="Loyalty Points" source="loyaltyPoints" />
            <TextField label="Phone" source="phone" />
            <ReferenceField
              label="Salons User Profiles Salon Id Tosalons"
              source="salon.id"
              reference="Salon"
            >
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Genders"
              source="usergender.id"
              reference="UserGender"
            >
              <TextField source={USERGENDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Notification Settings"
              source="usernotificationsetting.id"
              reference="UserNotificationSetting"
            >
              <TextField source={USERNOTIFICATIONSETTING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Website" source="website" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
