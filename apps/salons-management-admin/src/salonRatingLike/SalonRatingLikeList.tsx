import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SALONRATING_TITLE_FIELD } from "../salonRating/SalonRatingTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const SalonRatingLikeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SalonRatingLikes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Review" source="review" />
        <ReferenceField
          label="Salon Ratings"
          source="salonrating.id"
          reference="SalonRating"
        >
          <TextField source={SALONRATING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Salons" source="salon.id" reference="Salon">
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Profiles Salon Rating Likes User Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Profiles Salon Rating Likes Voter Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
