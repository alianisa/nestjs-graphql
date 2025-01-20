import { ChatMessageWhereUniqueInput } from "./ChatMessageWhereUniqueInput";
import { ChatMessageUpdateManyWithoutChatMessagesInput } from "./ChatMessageUpdateManyWithoutChatMessagesInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ChatMessageUpdateInput = {
  chatMessages?: ChatMessageWhereUniqueInput | null;
  otherChatMessages?: ChatMessageUpdateManyWithoutChatMessagesInput;
  text?: string | null;
  timestamp?: Date | null;
  userProfiles?: UserProfileWhereUniqueInput | null;
};
