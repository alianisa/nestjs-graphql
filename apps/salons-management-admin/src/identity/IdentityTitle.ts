import { Identity as TIdentity } from "../api/identity/Identity";

export const IDENTITY_TITLE_FIELD = "email";

export const IdentityTitle = (record: TIdentity): string => {
  return record.email?.toString() || String(record.id);
};
