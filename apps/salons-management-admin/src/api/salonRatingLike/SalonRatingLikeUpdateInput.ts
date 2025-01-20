import { SalonRatingWhereUniqueInput } from "../salonRating/SalonRatingWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SalonRatingLikeUpdateInput = {
  review?: string | null;
  salonRatings?: SalonRatingWhereUniqueInput | null;
  salons?: SalonWhereUniqueInput;
  userProfilesSalonRatingLikesUserIdTouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesSalonRatingLikesVoterIdTouserProfiles?: UserProfileWhereUniqueInput | null;
};
