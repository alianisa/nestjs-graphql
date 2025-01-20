import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MOBILEPAYMENTPROVIDER_TITLE_FIELD } from "./MobilePaymentProviderTitle";

export const MobilePaymentProviderShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Api Key" source="apiKey" />
        <TextField label="Api Secret" source="apiSecret" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="Payment"
          target="mobile_payment_provider_id"
          label="Payments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
