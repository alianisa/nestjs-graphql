import { Discount as TDiscount } from "../api/discount/Discount";

export const DISCOUNT_TITLE_FIELD = "name";

export const DiscountTitle = (record: TDiscount): string => {
  return record.name?.toString() || String(record.id);
};
