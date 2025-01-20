import { SortOrder } from "../../util/SortOrder";

export type UserNotificationSettingOrderByInput = {
  appointmentReminders?: SortOrder;
  createdAt?: SortOrder;
  emailEnabled?: SortOrder;
  id?: SortOrder;
  promotionalNotifications?: SortOrder;
  pushEnabled?: SortOrder;
  smsEnabled?: SortOrder;
  statusUpdates?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
