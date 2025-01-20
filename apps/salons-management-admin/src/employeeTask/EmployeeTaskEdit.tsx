import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { OrderTitle } from "../order/OrderTitle";
import { QueueTitle } from "../queue/QueueTitle";
import { SalonTitle } from "../salon/SalonTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const EmployeeTaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Actual Duration" source="actualDuration" />
        <DateTimeInput label="Actual Start Time" source="actualStartTime" />
        <ReferenceInput
          source="appointments.id"
          reference="Appointment"
          label="Appointments"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <DateTimeInput label="Completed At" source="completedAt" />
        <NumberInput
          step={1}
          label="Estimated Duration"
          source="estimatedDuration"
        />
        <TextInput label="Notes" source="notes" />
        <SelectInput
          source="order_type"
          label="Order Type"
          choices={[
            { label: "appointment", value: "appointment" },
            { label: "queue", value: "queue" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="orders.id" reference="Order" label="Orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceInput source="queues.id" reference="Queue" label="Queues">
          <SelectInput optionText={QueueTitle} />
        </ReferenceInput>
        <ReferenceInput source="salons.id" reference="Salon" label="Salons">
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
        <DateTimeInput
          label="Scheduled Start Time"
          source="scheduledStartTime"
        />
        <SelectInput
          source="task_status"
          label="Task Status"
          choices={[
            { label: "NOT_STARTED", value: "NOT_STARTED" },
            { label: "WITH_MASTER", value: "WITH_MASTER" },
            { label: "IN_PROGRESS", value: "IN_PROGRESS" },
            { label: "COMPLETED", value: "COMPLETED" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
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
