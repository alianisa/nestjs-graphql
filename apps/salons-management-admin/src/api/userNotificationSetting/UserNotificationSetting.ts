import { UserProfile } from "../userProfile/UserProfile";

export type UserNotificationSetting = {
  appointmentReminders: boolean;
  createdAt: Date;
  emailEnabled: boolean;
  id: string;
  promotionalNotifications: boolean;
  pushEnabled: boolean;
  smsEnabled: boolean;
  statusUpdates: boolean;
  updatedAt: Date | null;
  userProfiles?: UserProfile;
};
