import { SortOrder } from "../../util/SortOrder";

export type UserActivityOrderByInput = {
  activityDescription?: SortOrder;
  activityName?: SortOrder;
  activitySubText?: SortOrder;
  activityTime?: SortOrder;
  activityType?: SortOrder;
  id?: SortOrder;
  otherUser?: SortOrder;
  projectRef?: SortOrder;
  readState?: SortOrder;
  targetUserRef?: SortOrder;
  taskRef?: SortOrder;
  unreadByUser?: SortOrder;
};
