import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";

export const PromocodeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Promocodes"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="User Limit" source="userLimit" />{" "}
      </Datagrid>
    </List>
  );
};
