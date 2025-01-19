import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type NotificationUpdateInput = {
  body?: string;
  imageUrl?: string | null;
  title?: string;
  userProfiles?: UserProfileWhereUniqueInput;
};
