import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  title?: SortOrder;
  user_id?: SortOrder;
};
