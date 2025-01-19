import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalonServiceCategoryTitle } from "../salonServiceCategory/SalonServiceCategoryTitle";
import { SalonTitle } from "../salon/SalonTitle";

export const SalonServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
