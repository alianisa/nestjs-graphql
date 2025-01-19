import { SortOrder } from "../../util/SortOrder";

export type UserFavoriteSalonOrderByInput = {
  createdAt?: SortOrder;
  favorite?: SortOrder;
  id?: SortOrder;
  salon_id?: SortOrder;
  user_id?: SortOrder;
};
