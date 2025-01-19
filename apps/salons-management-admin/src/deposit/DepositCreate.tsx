import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const DepositCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
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
      </SimpleForm>
    </Create>
  );
};
