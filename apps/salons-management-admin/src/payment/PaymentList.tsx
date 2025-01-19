import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MOBILEPAYMENTPROVIDER_TITLE_FIELD } from "../mobilePaymentProvider/MobilePaymentProviderTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
