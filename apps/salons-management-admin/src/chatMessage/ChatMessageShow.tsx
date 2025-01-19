import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHATMESSAGE_TITLE_FIELD } from "./ChatMessageTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const ChatMessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Chat Messages"
          source="chatmessage.id"
          reference="ChatMessage"
        >
          <TextField source={CHATMESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Text" source="text" />
        <TextField label="Timestamp" source="timestamp" />
        <ReferenceField
          label="User Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ChatMessage"
          target="chat"
          label="ChatMessages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Chat Messages"
              source="chatmessage.id"
              reference="ChatMessage"
            >
              <TextField source={CHATMESSAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Text" source="text" />
            <TextField label="Timestamp" source="timestamp" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
