import { SalonRating as TSalonRating } from "../api/salonRating/SalonRating";

export const SALONRATING_TITLE_FIELD = "review";

export const SalonRatingTitle = (record: TSalonRating): string => {
  return record.review?.toString() || String(record.id);
};
