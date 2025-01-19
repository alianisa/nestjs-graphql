import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const UserFavoriteMasterShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <BooleanField label="Favorite" source="favorite" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="User Profiles User Favorite Masters Master Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Profiles User Favorite Masters User Id Touser Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
