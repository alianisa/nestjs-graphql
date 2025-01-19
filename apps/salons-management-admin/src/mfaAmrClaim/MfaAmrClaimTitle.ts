import { MfaAmrClaim as TMfaAmrClaim } from "../api/mfaAmrClaim/MfaAmrClaim";

export const MFAAMRCLAIM_TITLE_FIELD = "authenticationMethod";

export const MfaAmrClaimTitle = (record: TMfaAmrClaim): string => {
  return record.authenticationMethod?.toString() || String(record.id);
};
