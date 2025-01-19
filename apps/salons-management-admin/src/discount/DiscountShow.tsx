import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { DISCOUNT_TITLE_FIELD } from "./DiscountTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { PROMOCODE_TITLE_FIELD } from "../promocode/PromocodeTitle";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const DiscountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Discount Type" source="discountType" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Max Discount Amount" source="maxDiscountAmount" />
        <TextField label="Min Order Amount" source="minOrderAmount" />
        <TextField label="Name" source="name" />
        <TextField label="Service Categories" source="serviceCategories" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Usage Limit" source="usageLimit" />
        <TextField label="User Limit" source="userLimit" />
        <TextField label="Value" source="value" />
        <ReferenceManyField
          reference="Order"
          target="discount_id"
          label="Orders"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
            <TextField
              label="Loyalty Points Earned"
              source="loyaltyPointsEarned"
            />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Promocode"
          target="discount_id"
          label="Promocodes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discounts"
              source="discount.id"
              reference="Discount"
            >
              <TextField source={DISCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Usage Limit" source="usageLimit" />
            <TextField label="Used Count" source="usedCount" />
            <TextField label="User Limit" source="userLimit" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
