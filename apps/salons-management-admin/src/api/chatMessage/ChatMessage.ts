import { UserProfile } from "../userProfile/UserProfile";

export type ChatMessage = {
  chatMessages?: ChatMessage | null;
  id: string;
  otherChatMessages?: Array<ChatMessage>;
  text: string | null;
  timestamp: Date | null;
  userProfiles?: UserProfile | null;
};
