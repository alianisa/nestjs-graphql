import { SortOrder } from "../../util/SortOrder";

export type SalonRatingLikeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  review?: SortOrder;
  salon_rating_id?: SortOrder;
  salon_id?: SortOrder;
  user_id?: SortOrder;
  voter_id?: SortOrder;
};
