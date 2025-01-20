import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { DepositTitle } from "../deposit/DepositTitle";
import { DiscountTitle } from "../discount/DiscountTitle";
import { EmployeeTaskTitle } from "../employeeTask/EmployeeTaskTitle";
import { LoyaltyTransactionTitle } from "../loyaltyTransaction/LoyaltyTransactionTitle";
import { OrderImageTitle } from "../orderImage/OrderImageTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { PromocodeTitle } from "../promocode/PromocodeTitle";
import { QueueTitle } from "../queue/QueueTitle";
import { SalonTitle } from "../salon/SalonTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";
import { UserRatingTitle } from "../userRating/UserRatingTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceArrayInput
          source="appointmentsAppointmentsOrderIdToorders"
          reference="Appointment"
        >
          <SelectArrayInput
            optionText={AppointmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="appointmentsOrdersAppointmentIdToappointments.id"
          reference="Appointment"
          label="Appointments Orders Appointment Id Toappointments"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <BooleanInput label="Canceled" source="canceled" />
        <TextInput label="Canceled Reason" source="canceledReason" />
        <BooleanInput label="Completed" source="completed" />
        <DateTimeInput label="Completed At" source="completedAt" />
        <NumberInput label="Deposit Amount" source="depositAmount" />
        <ReferenceArrayInput source="deposits" reference="Deposit">
          <SelectArrayInput
            optionText={DepositTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="Discount" source="discount" />
        <NumberInput label="Discount Amount" source="discountAmount" />
        <ReferenceInput
          source="discounts.id"
          reference="Discount"
          label="Discounts"
        >
          <SelectInput optionText={DiscountTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="employeeTasks" reference="EmployeeTask">
          <SelectArrayInput
            optionText={EmployeeTaskTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Loyalty Points Earned"
          source="loyaltyPointsEarned"
        />
        <NumberInput
          step={1}
          label="Loyalty Points Used"
          source="loyaltyPointsUsed"
        />
        <ReferenceArrayInput
          source="loyaltyTransactions"
          reference="LoyaltyTransaction"
        >
          <SelectArrayInput
            optionText={LoyaltyTransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Order Image Id" source="orderImageId" />
        <ReferenceArrayInput source="orderImages" reference="OrderImage">
          <SelectArrayInput
            optionText={OrderImageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Order Number" source="orderNumber" />
        <SelectInput
          source="order_type"
          label="Order Type"
          choices={[
            { label: "appointment", value: "appointment" },
            { label: "queue", value: "queue" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="payments.id"
          reference="Payment"
          label="Payments"
        >
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="promocodes.id"
          reference="Promocode"
          label="Promocodes"
        >
          <SelectInput optionText={PromocodeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="queuesOrdersQueueIdToqueues.id"
          reference="Queue"
          label="Queues Orders Queue Id Toqueues"
        >
          <SelectInput optionText={QueueTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="queuesQueuesOrderIdToorders"
          reference="Queue"
        >
          <SelectArrayInput
            optionText={QueueTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="salons.id" reference="Salon" label="Salons">
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
        <TextInput label="Services" source="services" />
        <BooleanInput label="Started" source="started" />
        <DateTimeInput label="Started At" source="startedAt" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "CREATED", value: "CREATED" },
            { label: "IN_TRANSIT", value: "IN_TRANSIT" },
            { label: "IN_QUEUE", value: "IN_QUEUE" },
            { label: "APPOINTMENT", value: "APPOINTMENT" },
            { label: "WAITING_FOR_MASTER", value: "WAITING_FOR_MASTER" },
            { label: "WITH_MASTER", value: "WITH_MASTER" },
            { label: "CANCELLED_BY_USER", value: "CANCELLED_BY_USER" },
            { label: "CANCELLED_BY_MASTER", value: "CANCELLED_BY_MASTER" },
            { label: "IN_PROGRESS", value: "IN_PROGRESS" },
            { label: "IN_PAYMENT", value: "IN_PAYMENT" },
            { label: "PAID", value: "PAID" },
            { label: "COMPLETED", value: "COMPLETED" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Total Amount" source="totalAmount" />
        <ReferenceArrayInput source="transactions" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput
          source="userProfilesOrdersEmployeeIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Orders Employee Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesOrdersUserIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Orders User Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="userRatings" reference="UserRating">
          <SelectArrayInput
            optionText={UserRatingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
