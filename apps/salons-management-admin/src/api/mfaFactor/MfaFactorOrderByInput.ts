import { SortOrder } from "../../util/SortOrder";

export type MfaFactorOrderByInput = {
  createdAt?: SortOrder;
  factor_type?: SortOrder;
  friendlyName?: SortOrder;
  id?: SortOrder;
  lastChallengedAt?: SortOrder;
  phone?: SortOrder;
  secret?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
  webAuthnAaguid?: SortOrder;
  webAuthnCredential?: SortOrder;
};
