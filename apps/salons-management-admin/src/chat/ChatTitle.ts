import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "lastMessage";

export const ChatTitle = (record: TChat): string => {
  return record.lastMessage?.toString() || String(record.id);
};
