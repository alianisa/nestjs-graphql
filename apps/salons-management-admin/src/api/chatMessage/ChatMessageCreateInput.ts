import { ChatMessageWhereUniqueInput } from "./ChatMessageWhereUniqueInput";
import { ChatMessageCreateNestedManyWithoutChatMessagesInput } from "./ChatMessageCreateNestedManyWithoutChatMessagesInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ChatMessageCreateInput = {
  chatMessages?: ChatMessageWhereUniqueInput | null;
  otherChatMessages?: ChatMessageCreateNestedManyWithoutChatMessagesInput;
  text?: string | null;
  timestamp?: Date | null;
  userProfiles?: UserProfileWhereUniqueInput | null;
};
