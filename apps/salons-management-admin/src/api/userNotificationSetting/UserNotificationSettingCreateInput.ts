import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserNotificationSettingCreateInput = {
  appointmentReminders: boolean;
  emailEnabled: boolean;
  promotionalNotifications: boolean;
  pushEnabled: boolean;
  smsEnabled: boolean;
  statusUpdates: boolean;
  updatedAt?: Date | null;
  userProfiles: UserProfileWhereUniqueInput;
};
