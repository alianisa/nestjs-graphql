import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeTaskTitle } from "../employeeTask/EmployeeTaskTitle";
import { OrderTitle } from "../order/OrderTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Appointment Date" source="appointmentDate" />
        <TextInput label="Employee Id" source="employeeId" />
        <ReferenceArrayInput source="employeeTasks" reference="EmployeeTask">
          <SelectArrayInput
            optionText={EmployeeTaskTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="ordersAppointmentsOrderIdToorders.id"
          reference="Order"
          label="Orders Appointments Order Id Toorders"
        >
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="ordersOrdersAppointmentIdToappointments"
          reference="Order"
        >
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="timeSlots.id"
          reference="TimeSlot"
          label="Time Slots"
        >
          <SelectInput optionText={TimeSlotTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfiles.id"
          reference="UserProfile"
          label="User Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
