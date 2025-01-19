import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SalonRatingTitle } from "../salonRating/SalonRatingTitle";
import { SalonTitle } from "../salon/SalonTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const SalonRatingLikeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Review" source="review" />
        <ReferenceInput
          source="salonRatings.id"
          reference="SalonRating"
          label="Salon Ratings"
        >
          <SelectInput optionText={SalonRatingTitle} />
        </ReferenceInput>
        <ReferenceInput source="salons.id" reference="Salon" label="Salons">
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesSalonRatingLikesUserIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Salon Rating Likes User Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesSalonRatingLikesVoterIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Salon Rating Likes Voter Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
