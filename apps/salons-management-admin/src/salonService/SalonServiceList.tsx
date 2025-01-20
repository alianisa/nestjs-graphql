import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SALONSERVICECATEGORY_TITLE_FIELD } from "../salonServiceCategory/SalonServiceCategoryTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";

export const SalonServiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SalonServices"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
