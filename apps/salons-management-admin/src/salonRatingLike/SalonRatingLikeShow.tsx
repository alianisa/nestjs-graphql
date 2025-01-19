import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SALONRATING_TITLE_FIELD } from "../salonRating/SalonRatingTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const SalonRatingLikeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
