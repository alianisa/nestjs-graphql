import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const EmployeeTaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmployeeTasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Actual Duration" source="actualDuration" />
        <TextField label="Actual Start Time" source="actualStartTime" />
        <ReferenceField
          label="Appointments"
          source="appointment.id"
          reference="Appointment"
        >
          <TextField source={APPOINTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Completed At" source="completedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Estimated Duration" source="estimatedDuration" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="Order Type" source="order_type" />
        <ReferenceField label="Orders" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Queues" source="queue.id" reference="Queue">
          <TextField source={QUEUE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Salons" source="salon.id" reference="Salon">
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Scheduled Start Time" source="scheduledStartTime" />
        <TextField label="Task Status" source="task_status" />
        <TextField label="Updated At" source="updatedAt" />
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
