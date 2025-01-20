import { OneTimeToken as TOneTimeToken } from "../api/oneTimeToken/OneTimeToken";

export const ONETIMETOKEN_TITLE_FIELD = "relatesTo";

export const OneTimeTokenTitle = (record: TOneTimeToken): string => {
  return record.relatesTo?.toString() || String(record.id);
};
