import { SortOrder } from "../../util/SortOrder";

export type SalonRatingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  review?: SortOrder;
  salon_id?: SortOrder;
  user_id?: SortOrder;
  voter_id?: SortOrder;
};
