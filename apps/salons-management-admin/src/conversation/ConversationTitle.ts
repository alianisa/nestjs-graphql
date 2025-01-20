import { Conversation as TConversation } from "../api/conversation/Conversation";

export const CONVERSATION_TITLE_FIELD = "chatId";

export const ConversationTitle = (record: TConversation): string => {
  return record.chatId?.toString() || String(record.id);
};
