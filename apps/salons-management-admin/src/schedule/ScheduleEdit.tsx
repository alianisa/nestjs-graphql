import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const ScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
