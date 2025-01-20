import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const EmployeeWorkScheduleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmployeeWorkSchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Break End" source="breakEnd" />
        <TextField label="Break Start" source="breakStart" />
        <TextField label="Day Of Week" source="day_of_week" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Salons" source="salon.id" reference="Salon">
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Shift End" source="shiftEnd" />
        <TextField label="Shift Start" source="shiftStart" />
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
