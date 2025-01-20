import { UserNotificationSettingWhereInput } from "./UserNotificationSettingWhereInput";
import { UserNotificationSettingOrderByInput } from "./UserNotificationSettingOrderByInput";

export type UserNotificationSettingFindManyArgs = {
  where?: UserNotificationSettingWhereInput;
  orderBy?: Array<UserNotificationSettingOrderByInput>;
  skip?: number;
  take?: number;
};
