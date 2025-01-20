import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ChatUpdateInput = {
  lastMessage?: string | null;
  lastMessageTime?: Date | null;
  userProfilesChatsUserATouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesChatsUserBTouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesChatsUsersTouserProfiles?: UserProfileWhereUniqueInput | null;
};
