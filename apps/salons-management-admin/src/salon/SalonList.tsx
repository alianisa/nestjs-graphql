import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const SalonList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Salons"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Active" source="active" />
        <TextField label="Address" source="address" />
        <TextField label="Barbers" source="barbers" />
        <TextField label="Categories" source="categories" />
        <TextField label="Close Time" source="closeTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Images" source="images" />
        <TextField label="Img" source="img" />
        <TextField label="Lat Lng" source="latLng" />
        <TextField label="Location" source="location" />
        <TextField label="Logo" source="logo" />
        <TextField label="Name" source="name" />
        <BooleanField label="Open" source="open" />
        <TextField label="Open Time" source="openTime" />
        <TextField label="Phone" source="phone" />
        <TextField label="Timezone" source="timezone" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField
          label="User Profiles Salons Salon Admin Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Website" source="website" />{" "}
      </Datagrid>
    </List>
  );
};
