import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PAYMENT_TITLE_FIELD } from "./PaymentTitle";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";
import { PROMOCODE_TITLE_FIELD } from "../promocode/PromocodeTitle";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";
import { MOBILEPAYMENTPROVIDER_TITLE_FIELD } from "../mobilePaymentProvider/MobilePaymentProviderTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <TextField label="Amount By Card" source="amountByCard" />
        <TextField label="Amount By Cash" source="amountByCash" />
        <BooleanField label="Completed" source="completed" />
        <TextField label="Completed At" source="completedAt" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Discount Amount" source="discountAmount" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Partial" source="isPartial" />
        <ReferenceField
          label="Mobile Payment Providers"
          source="mobilepaymentprovider.id"
          reference="MobilePaymentProvider"
        >
          <TextField source={MOBILEPAYMENTPROVIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <TextField label="Order Id" source="orderId" />
        <TextField label="Payment Method" source="payment_method" />
        <TextField label="Status" source="status" />
        <TextField label="Tax" source="tax" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="Deposit"
          target="payment_id"
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
          reference="Order"
          target="payment_id"
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
          reference="Transaction"
          target="payment_id"
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
      </SimpleShowLayout>
    </Show>
  );
};
