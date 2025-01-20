import { MfaFactor as TMfaFactor } from "../api/mfaFactor/MfaFactor";

export const MFAFACTOR_TITLE_FIELD = "friendlyName";

export const MfaFactorTitle = (record: TMfaFactor): string => {
  return record.friendlyName?.toString() || String(record.id);
};
