import { SalonCategory as TSalonCategory } from "../api/salonCategory/SalonCategory";

export const SALONCATEGORY_TITLE_FIELD = "name";

export const SalonCategoryTitle = (record: TSalonCategory): string => {
  return record.name?.toString() || String(record.id);
};
