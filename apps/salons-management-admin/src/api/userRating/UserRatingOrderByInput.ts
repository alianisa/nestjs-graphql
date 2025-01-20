import { SortOrder } from "../../util/SortOrder";

export type UserRatingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  order_id?: SortOrder;
  rating?: SortOrder;
  review?: SortOrder;
  owner?: SortOrder;
  user_id?: SortOrder;
};
