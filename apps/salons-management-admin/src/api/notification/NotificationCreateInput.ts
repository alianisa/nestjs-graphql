import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type NotificationCreateInput = {
  body: string;
  imageUrl?: string | null;
  title: string;
  userProfiles: UserProfileWhereUniqueInput;
};
