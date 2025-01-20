import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ChatCreateInput = {
  lastMessage?: string | null;
  lastMessageTime?: Date | null;
  userProfilesChatsUserATouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesChatsUserBTouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesChatsUsersTouserProfiles?: UserProfileWhereUniqueInput | null;
};
