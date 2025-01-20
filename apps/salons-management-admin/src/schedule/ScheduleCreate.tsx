import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const ScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Appointment Date" source="appointmentDate" />
        <DateTimeInput label="Appointment Time" source="appointmentTime" />
        <ReferenceInput
          source="userProfilesScheduleBarberIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Schedule Barber Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesScheduleUserIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Schedule User Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
