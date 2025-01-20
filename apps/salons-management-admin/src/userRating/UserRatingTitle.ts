import { UserRating as TUserRating } from "../api/userRating/UserRating";

export const USERRATING_TITLE_FIELD = "review";

export const UserRatingTitle = (record: TUserRating): string => {
  return record.review?.toString() || String(record.id);
};
