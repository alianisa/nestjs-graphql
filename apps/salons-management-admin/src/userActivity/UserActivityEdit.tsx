import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const UserActivityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Activity Description" source="activityDescription" />
        <TextInput label="Activity Name" source="activityName" />
        <TextInput label="Activity Sub Text" source="activitySubText" />
        <TextInput label="Activity Time" source="activityTime" />
        <TextInput label="Activity Type" source="activityType" />
        <TextInput label="Other User" source="otherUser" />
        <TextInput label="Project Ref" source="projectRef" />
        <BooleanInput label="Read State" source="readState" />
        <TextInput label="Target User Ref" source="targetUserRef" />
        <TextInput label="Task Ref" source="taskRef" />
        <TextInput label="Unread By User" source="unreadByUser" />
      </SimpleForm>
    </Edit>
  );
};
