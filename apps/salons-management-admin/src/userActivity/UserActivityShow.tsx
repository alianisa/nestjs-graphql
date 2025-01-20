import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const UserActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Activity Description" source="activityDescription" />
        <TextField label="Activity Name" source="activityName" />
        <TextField label="Activity Sub Text" source="activitySubText" />
        <TextField label="Activity Time" source="activityTime" />
        <TextField label="Activity Type" source="activityType" />
        <TextField label="ID" source="id" />
        <TextField label="Other User" source="otherUser" />
        <TextField label="Project Ref" source="projectRef" />
        <BooleanField label="Read State" source="readState" />
        <TextField label="Target User Ref" source="targetUserRef" />
        <TextField label="Task Ref" source="taskRef" />
        <TextField label="Unread By User" source="unreadByUser" />
      </SimpleShowLayout>
    </Show>
  );
};
