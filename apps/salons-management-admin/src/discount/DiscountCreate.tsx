import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { PromocodeTitle } from "../promocode/PromocodeTitle";

export const DiscountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Discount Type" source="discountType" />
        <DateTimeInput label="End Date" source="endDate" />
        <BooleanInput label="Is Active" source="isActive" />
        <NumberInput label="Max Discount Amount" source="maxDiscountAmount" />
        <NumberInput label="Min Order Amount" source="minOrderAmount" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="promocodes" reference="Promocode">
          <SelectArrayInput
            optionText={PromocodeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Service Categories" source="serviceCategories" />
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <NumberInput label="Usage Limit" source="usageLimit" />
        <NumberInput label="User Limit" source="userLimit" />
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
