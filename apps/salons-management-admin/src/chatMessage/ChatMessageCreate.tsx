import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ChatMessageTitle } from "./ChatMessageTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const ChatMessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chatMessages.id"
          reference="ChatMessage"
          label="Chat Messages"
        >
          <SelectInput optionText={ChatMessageTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="otherChatMessages" reference="ChatMessage">
          <SelectArrayInput
            optionText={ChatMessageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Text" source="text" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <ReferenceInput
          source="userProfiles.id"
          reference="UserProfile"
          label="User Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
