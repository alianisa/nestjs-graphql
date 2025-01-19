import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DiscountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Discounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};
