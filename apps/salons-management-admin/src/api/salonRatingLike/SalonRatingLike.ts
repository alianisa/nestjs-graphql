import { SalonRating } from "../salonRating/SalonRating";
import { Salon } from "../salon/Salon";
import { UserProfile } from "../userProfile/UserProfile";

export type SalonRatingLike = {
  createdAt: Date | null;
  id: string;
  review: string | null;
  salonRatings?: SalonRating | null;
  salons?: Salon;
  userProfilesSalonRatingLikesUserIdTouserProfiles?: UserProfile | null;
  userProfilesSalonRatingLikesVoterIdTouserProfiles?: UserProfile | null;
};
