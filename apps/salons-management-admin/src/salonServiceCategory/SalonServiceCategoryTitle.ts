import { SalonServiceCategory as TSalonServiceCategory } from "../api/salonServiceCategory/SalonServiceCategory";

export const SALONSERVICECATEGORY_TITLE_FIELD = "name";

export const SalonServiceCategoryTitle = (
  record: TSalonServiceCategory
): string => {
  return record.name?.toString() || String(record.id);
};
