import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SalonstestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Categories" source="categories" />
        <div />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Description" source="description" />
        <TextInput label="District" source="district" />
        <TextInput label="Email" source="email" />
        <TextInput label="Features" source="features" />
        <TextInput label="Google Place Id" source="googlePlaceId" />
        <TextInput label="Imported From" source="importedFrom" />
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="Phones" source="phones" />
        <div />
        <NumberInput step={1} label="Photos Count" source="photosCount" />
        <TextInput label="Price Category" source="priceCategory" />
        <div />
        <div />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Website" source="website" />
        <div />
      </SimpleForm>
    </Create>
  );
};
