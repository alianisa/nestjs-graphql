import { SortOrder } from "../../util/SortOrder";

export type IdentityOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  identityData?: SortOrder;
  lastSignInAt?: SortOrder;
  provider?: SortOrder;
  providerId?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
