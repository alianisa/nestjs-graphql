import { UserAccount as TUserAccount } from "../api/userAccount/UserAccount";

export const USERACCOUNT_TITLE_FIELD = "name";

export const UserAccountTitle = (record: TUserAccount): string => {
  return record.name?.toString() || String(record.id);
};
