import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ConversationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Chat Id" source="chatId" />
        <TextInput label="Content" source="content" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
