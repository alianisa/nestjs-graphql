import { SortOrder } from "../../util/SortOrder";

export type UserFavoriteMasterOrderByInput = {
  createdAt?: SortOrder;
  favorite?: SortOrder;
  id?: SortOrder;
  master_id?: SortOrder;
  user_id?: SortOrder;
};
