import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const UserFavoriteMasterEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <BooleanInput label="Favorite" source="favorite" />
        <ReferenceInput
          source="userProfilesUserFavoriteMastersMasterIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles User Favorite Masters Master Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesUserFavoriteMastersUserIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles User Favorite Masters User Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
