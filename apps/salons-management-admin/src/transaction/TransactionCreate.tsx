import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Error Message" source="errorMessage" />
        <ReferenceInput source="orders.id" reference="Order" label="Orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="payments.id"
          reference="Payment"
          label="Payments"
        >
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <TextInput label="Status" source="status" />
        <TextInput label="Transaction Type" source="transactionType" />
      </SimpleForm>
    </Create>
  );
};
