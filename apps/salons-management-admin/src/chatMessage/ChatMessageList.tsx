import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHATMESSAGE_TITLE_FIELD } from "./ChatMessageTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const ChatMessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ChatMessages"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
