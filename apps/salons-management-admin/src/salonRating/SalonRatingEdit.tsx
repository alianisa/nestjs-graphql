import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalonRatingLikeTitle } from "../salonRatingLike/SalonRatingLikeTitle";
import { SalonTitle } from "../salon/SalonTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const SalonRatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Rating" source="rating" />
        <TextInput label="Review" source="review" />
        <ReferenceArrayInput
          source="salonRatingLikes"
          reference="SalonRatingLike"
        >
          <SelectArrayInput
            optionText={SalonRatingLikeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="salons.id" reference="Salon" label="Salons">
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesSalonRatingsUserIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Salon Ratings User Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesSalonRatingsVoterIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Salon Ratings Voter Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
