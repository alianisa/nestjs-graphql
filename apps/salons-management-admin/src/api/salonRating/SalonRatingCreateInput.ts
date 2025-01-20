import { Decimal } from "decimal.js";
import { SalonRatingLikeCreateNestedManyWithoutSalonRatingsInput } from "./SalonRatingLikeCreateNestedManyWithoutSalonRatingsInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SalonRatingCreateInput = {
  rating: Decimal;
  review?: string | null;
  salonRatingLikes?: SalonRatingLikeCreateNestedManyWithoutSalonRatingsInput;
  salons: SalonWhereUniqueInput;
  userProfilesSalonRatingsUserIdTouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesSalonRatingsVoterIdTouserProfiles?: UserProfileWhereUniqueInput | null;
};
