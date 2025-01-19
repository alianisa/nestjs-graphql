import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalonServiceCategoryTitle } from "../salonServiceCategory/SalonServiceCategoryTitle";
import { SalonTitle } from "../salon/SalonTitle";

export const SalonServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Img" source="img" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <ReferenceInput
          source="salonServiceCategories.id"
          reference="SalonServiceCategory"
          label="Salon Service Categories"
        >
          <SelectInput optionText={SalonServiceCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="salons.id" reference="Salon" label="Salons">
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
