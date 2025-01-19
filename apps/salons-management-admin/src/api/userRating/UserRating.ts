import { Order } from "../order/Order";
import { Decimal } from "decimal.js";
import { UserProfile } from "../userProfile/UserProfile";

export type UserRating = {
  createdAt: Date;
  id: string;
  orders?: Order | null;
  rating: Decimal;
  review: string | null;
  userProfilesUserRatingsOwnerTouserProfiles?: UserProfile;
  userProfilesUserRatingsUserIdTouserProfiles?: UserProfile;
};
