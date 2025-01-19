import { ChatMessage as TChatMessage } from "../api/chatMessage/ChatMessage";

export const CHATMESSAGE_TITLE_FIELD = "text";

export const ChatMessageTitle = (record: TChatMessage): string => {
  return record.text?.toString() || String(record.id);
};
