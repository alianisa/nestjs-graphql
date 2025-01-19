import { SortOrder } from "../../util/SortOrder";

export type OneTimeTokenOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  relatesTo?: SortOrder;
  tokenHash?: SortOrder;
  token_type?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
