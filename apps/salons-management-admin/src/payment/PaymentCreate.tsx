import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DepositTitle } from "../deposit/DepositTitle";
import { MobilePaymentProviderTitle } from "../mobilePaymentProvider/MobilePaymentProviderTitle";
import { OrderTitle } from "../order/OrderTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <NumberInput label="Amount By Card" source="amountByCard" />
        <NumberInput label="Amount By Cash" source="amountByCash" />
        <BooleanInput label="Completed" source="completed" />
        <DateTimeInput label="Completed At" source="completedAt" />
        <DateTimeInput label="Created At" source="createdAt" />
        <ReferenceArrayInput source="deposits" reference="Deposit">
          <SelectArrayInput
            optionText={DepositTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="Discount Amount" source="discountAmount" />
        <BooleanInput label="Is Partial" source="isPartial" />
        <ReferenceInput
          source="mobilePaymentProviders.id"
          reference="MobilePaymentProvider"
          label="Mobile Payment Providers"
        >
          <SelectInput optionText={MobilePaymentProviderTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Order Id" source="orderId" />
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="payment_method"
          label="Payment Method"
          choices={[
            { label: "cash", value: "cash" },
            { label: "card", value: "card" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Pending", value: "Pending" },
            { label: "Completed", value: "Completed" },
            { label: "PartiallyPaid", value: "PartiallyPaid" },
            { label: "Failed", value: "Failed" },
            { label: "Cancelled", value: "Cancelled" },
            { label: "Refunded", value: "Refunded" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Tax" source="tax" />
        <ReferenceArrayInput source="transactions" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
