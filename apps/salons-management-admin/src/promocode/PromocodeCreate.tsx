import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DiscountTitle } from "../discount/DiscountTitle";
import { OrderTitle } from "../order/OrderTitle";

export const PromocodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <ReferenceInput
          source="discounts.id"
          reference="Discount"
          label="Discounts"
        >
          <SelectInput optionText={DiscountTitle} />
        </ReferenceInput>
        <DateTimeInput label="End Date" source="endDate" />
        <BooleanInput label="Is Active" source="isActive" />
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <NumberInput step={1} label="Usage Limit" source="usageLimit" />
        <NumberInput step={1} label="Used Count" source="usedCount" />
        <NumberInput step={1} label="User Limit" source="userLimit" />
      </SimpleForm>
    </Create>
  );
};
