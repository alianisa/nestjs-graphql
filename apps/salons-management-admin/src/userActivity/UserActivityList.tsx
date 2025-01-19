import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserActivityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserActivities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Unread By User" source="unreadByUser" />{" "}
      </Datagrid>
    </List>
  );
};
