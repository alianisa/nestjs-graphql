import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserNotificationSettingWhereInput = {
  appointmentReminders?: BooleanFilter;
  createdAt?: DateTimeFilter;
  emailEnabled?: BooleanFilter;
  id?: StringFilter;
  promotionalNotifications?: BooleanFilter;
  pushEnabled?: BooleanFilter;
  smsEnabled?: BooleanFilter;
  statusUpdates?: BooleanFilter;
  updatedAt?: DateTimeNullableFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
