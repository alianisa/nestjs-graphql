import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const ChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
