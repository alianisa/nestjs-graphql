import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const ScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Appointment Date" source="appointmentDate" />
        <TextField label="Appointment Time" source="appointmentTime" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="User Profiles Schedule Barber Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Profiles Schedule User Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
