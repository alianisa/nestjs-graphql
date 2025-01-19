import { SortOrder } from "../../util/SortOrder";

export type UserAddressOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  lat?: SortOrder;
  lng?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
