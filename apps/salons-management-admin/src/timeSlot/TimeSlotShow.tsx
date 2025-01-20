import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { TIMESLOT_TITLE_FIELD } from "./TimeSlotTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";

export const TimeSlotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Time" source="endTime" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Available" source="isAvailable" />
        <ReferenceField label="Salons" source="salon.id" reference="Salon">
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Slot Date" source="slotDate" />
        <TextField label="Slot Time" source="slotTime" />
        <TextField label="Start Time" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Appointment"
          target="time_slot_id"
          label="Appointments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Appointment Date" source="appointmentDate" />
            <TextField label="Employee Id" source="employeeId" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Orders Appointments Order Id Toorders"
              source="order.id"
              reference="Order"
            >
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Slots"
              source="timeslot.id"
              reference="TimeSlot"
            >
              <TextField source={TIMESLOT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
