import { UserNotificationSetting as TUserNotificationSetting } from "../api/userNotificationSetting/UserNotificationSetting";

export const USERNOTIFICATIONSETTING_TITLE_FIELD = "id";

export const UserNotificationSettingTitle = (
  record: TUserNotificationSetting
): string => {
  return record.id?.toString() || String(record.id);
};
