import { MfaChallenge as TMfaChallenge } from "../api/mfaChallenge/MfaChallenge";

export const MFACHALLENGE_TITLE_FIELD = "ipAddress";

export const MfaChallengeTitle = (record: TMfaChallenge): string => {
  return record.ipAddress?.toString() || String(record.id);
};
