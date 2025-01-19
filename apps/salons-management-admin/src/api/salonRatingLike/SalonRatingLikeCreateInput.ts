import { SalonRatingWhereUniqueInput } from "../salonRating/SalonRatingWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SalonRatingLikeCreateInput = {
  review?: string | null;
  salonRatings?: SalonRatingWhereUniqueInput | null;
  salons: SalonWhereUniqueInput;
  userProfilesSalonRatingLikesUserIdTouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesSalonRatingLikesVoterIdTouserProfiles?: UserProfileWhereUniqueInput | null;
};
