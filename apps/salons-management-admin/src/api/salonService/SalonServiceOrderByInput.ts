import { SortOrder } from "../../util/SortOrder";

export type SalonServiceOrderByInput = {
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  img?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  category_id?: SortOrder;
  salon_id?: SortOrder;
};
