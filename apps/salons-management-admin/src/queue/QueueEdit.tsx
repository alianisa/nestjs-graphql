import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeTaskTitle } from "../employeeTask/EmployeeTaskTitle";
import { OrderTitle } from "../order/OrderTitle";
import { SalonTitle } from "../salon/SalonTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const QueueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Completed" source="completed" />
        <DateTimeInput label="Completed At" source="completedAt" />
        <DateTimeInput label="Created At" source="createdAt" />
        <ReferenceArrayInput source="employeeTasks" reference="EmployeeTask">
          <SelectArrayInput
            optionText={EmployeeTaskTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Estimated Wait Time"
          source="estimatedWaitTime"
        />
        <ReferenceArrayInput
          source="ordersOrdersQueueIdToqueues"
          reference="Order"
        >
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="ordersQueuesOrderIdToorders.id"
          reference="Order"
          label="Orders Queues Order Id Toorders"
        >
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Queue Number" source="queueNumber" />
        <ReferenceInput source="salons.id" reference="Salon" label="Salons">
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput
          source="userProfilesQueuesEmployeeIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Queues Employee Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesQueuesUserIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Queues User Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
