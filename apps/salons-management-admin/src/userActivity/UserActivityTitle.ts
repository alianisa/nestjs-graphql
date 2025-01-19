import { UserActivity as TUserActivity } from "../api/userActivity/UserActivity";

export const USERACTIVITY_TITLE_FIELD = "activityName";

export const UserActivityTitle = (record: TUserActivity): string => {
  return record.activityName?.toString() || String(record.id);
};
