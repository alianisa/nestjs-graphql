import { Decimal } from "decimal.js";
import { SalonRatingLike } from "../salonRatingLike/SalonRatingLike";
import { Salon } from "../salon/Salon";
import { UserProfile } from "../userProfile/UserProfile";

export type SalonRating = {
  createdAt: Date | null;
  id: string;
  rating: Decimal;
  review: string | null;
  salonRatingLikes?: Array<SalonRatingLike>;
  salons?: Salon;
  userProfilesSalonRatingsUserIdTouserProfiles?: UserProfile | null;
  userProfilesSalonRatingsVoterIdTouserProfiles?: UserProfile | null;
};
