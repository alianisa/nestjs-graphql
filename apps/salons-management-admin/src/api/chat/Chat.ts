import { UserProfile } from "../userProfile/UserProfile";

export type Chat = {
  id: string;
  lastMessage: string | null;
  lastMessageTime: Date | null;
  userProfilesChatsUserATouserProfiles?: UserProfile | null;
  userProfilesChatsUserBTouserProfiles?: UserProfile | null;
  userProfilesChatsUsersTouserProfiles?: UserProfile | null;
};
