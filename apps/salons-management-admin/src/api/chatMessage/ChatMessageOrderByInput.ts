import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  chat?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  timestamp?: SortOrder;
  user?: SortOrder;
};
