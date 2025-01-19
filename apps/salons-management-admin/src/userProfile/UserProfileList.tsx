import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USERGENDER_TITLE_FIELD } from "../userGender/UserGenderTitle";
import { USERNOTIFICATIONSETTING_TITLE_FIELD } from "../userNotificationSetting/UserNotificationSettingTitle";

export const UserProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Avatar Url" source="avatarUrl" />
        <TextField label="Bio" source="bio" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Date Of Birth" source="dateOfBirth" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Email" source="email" />
        <TextField label="Employee Dismissal At" source="employeeDismissalAt" />
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
        <TextField label="Roles" source="roles" />
        <ReferenceField
          label="Salons User Profiles Salon Id Tosalons"
          source="salon.id"
          reference="Salon"
        >
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
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
        <TextField label="Username" source="username" />
        <TextField label="Website" source="website" />{" "}
      </Datagrid>
    </List>
  );
};
