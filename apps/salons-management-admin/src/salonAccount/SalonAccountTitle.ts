import { SalonAccount as TSalonAccount } from "../api/salonAccount/SalonAccount";

export const SALONACCOUNT_TITLE_FIELD = "name";

export const SalonAccountTitle = (record: TSalonAccount): string => {
  return record.name?.toString() || String(record.id);
};
