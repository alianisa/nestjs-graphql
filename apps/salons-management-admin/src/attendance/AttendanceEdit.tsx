import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { SalonTitle } from "../salon/SalonTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const AttendanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="action"
          label="Action"
          choices={[
            { label: "clock_in", value: "clock_in" },
            { label: "clock_out", value: "clock_out" },
            { label: "break_start", value: "break_start" },
            { label: "break_end", value: "break_end" },
            { label: "working", value: "working" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Action Time" source="actionTime" />
        <DateTimeInput label="Clockin" source="clockin" />
        <DateTimeInput label="Clockout" source="clockout" />
        <BooleanInput label="Completed" source="completed" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput source="salons.id" reference="Salon" label="Salons">
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput
          source="userProfiles.id"
          reference="UserProfile"
          label="User Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
