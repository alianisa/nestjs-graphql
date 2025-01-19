import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Body" source="body" />
        <TextInput label="Image Url" source="imageUrl" />
        <TextInput label="Title" source="title" />
        <ReferenceInput
          source="userProfiles.id"
          reference="UserProfile"
          label="User Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
