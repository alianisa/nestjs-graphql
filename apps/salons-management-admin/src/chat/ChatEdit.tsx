import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const ChatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Last Message" source="lastMessage" />
        <DateTimeInput label="Last Message Time" source="lastMessageTime" />
        <ReferenceInput
          source="userProfilesChatsUserATouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Chats User A Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesChatsUserBTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Chats User B Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfilesChatsUsersTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Chats Users Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
