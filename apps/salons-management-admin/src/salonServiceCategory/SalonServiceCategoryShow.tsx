import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SALONSERVICECATEGORY_TITLE_FIELD } from "./SalonServiceCategoryTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";

export const SalonServiceCategoryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceManyField
          reference="SalonService"
          target="category_id"
          label="SalonServices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Description" source="description" />
            <TextField label="Duration" source="duration" />
            <TextField label="ID" source="id" />
            <TextField label="Img" source="img" />
            <TextField label="Name" source="name" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Salon Service Categories"
              source="salonservicecategory.id"
              reference="SalonServiceCategory"
            >
              <TextField source={SALONSERVICECATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
