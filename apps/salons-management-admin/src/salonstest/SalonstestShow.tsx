import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SalonstestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Working Hours" source="workingHours" />
      </SimpleShowLayout>
    </Show>
  );
};
