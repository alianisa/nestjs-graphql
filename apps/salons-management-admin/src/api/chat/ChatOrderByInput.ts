import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  id?: SortOrder;
  lastMessage?: SortOrder;
  lastMessageTime?: SortOrder;
  user_a?: SortOrder;
  user_b?: SortOrder;
  users?: SortOrder;
};
