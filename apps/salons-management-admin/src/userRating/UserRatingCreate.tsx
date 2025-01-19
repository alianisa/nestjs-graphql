import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const UserRatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="orders.id" reference="Order" label="Orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="Rating" source="rating" />
        <TextInput label="Review" source="review" />
        <ReferenceInput
          source="userProfilesUserRatingsOwnerTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles User Ratings Owner Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesUserRatingsUserIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles User Ratings User Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
