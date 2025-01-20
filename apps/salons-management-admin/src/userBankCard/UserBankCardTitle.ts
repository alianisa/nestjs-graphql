import { UserBankCard as TUserBankCard } from "../api/userBankCard/UserBankCard";

export const USERBANKCARD_TITLE_FIELD = "name";

export const UserBankCardTitle = (record: TUserBankCard): string => {
  return record.name?.toString() || String(record.id);
};
