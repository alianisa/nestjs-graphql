import { SortOrder } from "../../util/SortOrder";

export type MfaAmrClaimOrderByInput = {
  authenticationMethod?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  session_id?: SortOrder;
  updatedAt?: SortOrder;
};
