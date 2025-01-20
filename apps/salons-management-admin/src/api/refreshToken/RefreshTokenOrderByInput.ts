import { SortOrder } from "../../util/SortOrder";

export type RefreshTokenOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  instanceId?: SortOrder;
  parent?: SortOrder;
  revoked?: SortOrder;
  session_id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
