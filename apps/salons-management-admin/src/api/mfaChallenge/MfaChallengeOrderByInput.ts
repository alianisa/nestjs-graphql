import { SortOrder } from "../../util/SortOrder";

export type MfaChallengeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  factor_id?: SortOrder;
  otpCode?: SortOrder;
  verifiedAt?: SortOrder;
  webAuthnSessionData?: SortOrder;
};
