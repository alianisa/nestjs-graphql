import { Promocode as TPromocode } from "../api/promocode/Promocode";

export const PROMOCODE_TITLE_FIELD = "code";

export const PromocodeTitle = (record: TPromocode): string => {
  return record.code?.toString() || String(record.id);
};
