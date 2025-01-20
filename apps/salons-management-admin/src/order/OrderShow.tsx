import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";
import { PROMOCODE_TITLE_FIELD } from "../promocode/PromocodeTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <ReferenceField
          label="Appointments Orders Appointment Id Toappointments"
          source="appointment.id"
          reference="Appointment"
        >
          <TextField source={APPOINTMENT_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Canceled" source="canceled" />
        <TextField label="Canceled Reason" source="canceledReason" />
        <BooleanField label="Completed" source="completed" />
        <TextField label="Completed At" source="completedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deposit Amount" source="depositAmount" />
        <TextField label="Discount" source="discount" />
        <TextField label="Discount Amount" source="discountAmount" />
        <ReferenceField
          label="Discounts"
          source="discount.id"
          reference="Discount"
        >
          <TextField source={DISCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Loyalty Points Earned" source="loyaltyPointsEarned" />
        <TextField label="Loyalty Points Used" source="loyaltyPointsUsed" />
        <TextField label="Order Image Id" source="orderImageId" />
        <TextField label="Order Number" source="orderNumber" />
        <TextField label="Order Type" source="order_type" />
        <ReferenceField
          label="Payments"
          source="payment.id"
          reference="Payment"
        >
          <TextField source={PAYMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Promocodes"
          source="promocode.id"
          reference="Promocode"
        >
          <TextField source={PROMOCODE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Queues Orders Queue Id Toqueues"
          source="queue.id"
          reference="Queue"
        >
          <TextField source={QUEUE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Salons" source="salon.id" reference="Salon">
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Services" source="services" />
        <BooleanField label="Started" source="started" />
        <TextField label="Started At" source="startedAt" />
        <TextField label="Status" source="status" />
        <TextField label="Total Amount" source="totalAmount" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField
          label="User Profiles Orders Employee Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Profiles Orders User Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Appointment"
          target="order_id"
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
        <ReferenceManyField
          reference="Deposit"
          target="order_id"
          label="Deposits"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Payments"
              source="payment.id"
              reference="Payment"
            >
              <TextField source={PAYMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeTask"
          target="order_id"
          label="EmployeeTasks"
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
            <TextField
              label="Scheduled Start Time"
              source="scheduledStartTime"
            />
            <TextField label="Task Status" source="task_status" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LoyaltyTransaction"
          target="order_id"
          label="LoyaltyTransactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Points Earned" source="pointsEarned" />
            <TextField label="Points Spent" source="pointsSpent" />
            <TextField label="Transaction Type" source="transactionType" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderImage"
          target="order_id"
          label="OrderImages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Image Url" source="imageUrl" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Queue" target="order_id" label="Queues">
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="order_id"
          label="Transactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Error Message" source="errorMessage" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Payments"
              source="payment.id"
              reference="Payment"
            >
              <TextField source={PAYMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Transaction Type" source="transactionType" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserRating"
          target="order_id"
          label="UserRatings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
            <TextField label="Review" source="review" />
            <ReferenceField
              label="User Profiles User Ratings Owner Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles User Ratings User Id Touser Profiles"
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
