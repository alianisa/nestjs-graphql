import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const QueueList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Queues"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Completed" source="completed" />
        <TextField label="Completed At" source="completedAt" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Estimated Wait Time" source="estimatedWaitTime" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Orders Queues Order Id Toorders"
          source="order.id"
          reference="Order"
        >
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Queue Number" source="queueNumber" />
        <ReferenceField label="Salons" source="salon.id" reference="Salon">
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField
          label="User Profiles Queues Employee Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Profiles Queues User Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
