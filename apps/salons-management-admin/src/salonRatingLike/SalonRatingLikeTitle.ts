import { SalonRatingLike as TSalonRatingLike } from "../api/salonRatingLike/SalonRatingLike";

export const SALONRATINGLIKE_TITLE_FIELD = "review";

export const SalonRatingLikeTitle = (record: TSalonRatingLike): string => {
  return record.review?.toString() || String(record.id);
};
