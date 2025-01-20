import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SalonstestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Salonstests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Address" source="address" />
        <TextField label="Categories" source="categories" />
        <TextField label="Coordinates" source="coordinates" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Description" source="description" />
        <TextField label="District" source="district" />
        <TextField label="Email" source="email" />
        <TextField label="Features" source="features" />
        <TextField label="Google Place Id" source="googlePlaceId" />
        <TextField label="ID" source="id" />
        <TextField label="Imported From" source="importedFrom" />
        <TextField label="Metro" source="metro" />
        <TextField label="Name" source="name" />
        <TextField label="Phones" source="phones" />
        <TextField label="Photos" source="photos" />
        <TextField label="Photos Count" source="photosCount" />
        <TextField label="Price Category" source="priceCategory" />
        <TextField label="Rating" source="rating" />
        <TextField label="Social Links" source="socialLinks" />
        <TextField label="Status" source="status" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Website" source="website" />
        <TextField label="Working Hours" source="workingHours" />{" "}
      </Datagrid>
    </List>
  );
};
