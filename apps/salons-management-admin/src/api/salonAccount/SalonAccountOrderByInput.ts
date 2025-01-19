import { SortOrder } from "../../util/SortOrder";

export type SalonAccountOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  numberField?: SortOrder;
  salon_id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
