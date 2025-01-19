import { Decimal } from "decimal.js";
import { SalonRatingLikeUpdateManyWithoutSalonRatingsInput } from "./SalonRatingLikeUpdateManyWithoutSalonRatingsInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SalonRatingUpdateInput = {
  rating?: Decimal;
  review?: string | null;
  salonRatingLikes?: SalonRatingLikeUpdateManyWithoutSalonRatingsInput;
  salons?: SalonWhereUniqueInput;
  userProfilesSalonRatingsUserIdTouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesSalonRatingsVoterIdTouserProfiles?: UserProfileWhereUniqueInput | null;
};
