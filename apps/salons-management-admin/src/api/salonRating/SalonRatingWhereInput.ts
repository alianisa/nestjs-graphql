import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SalonRatingLikeListRelationFilter } from "../salonRatingLike/SalonRatingLikeListRelationFilter";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SalonRatingWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  rating?: DecimalFilter;
  review?: StringNullableFilter;
  salonRatingLikes?: SalonRatingLikeListRelationFilter;
  salons?: SalonWhereUniqueInput;
  userProfilesSalonRatingsUserIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesSalonRatingsVoterIdTouserProfiles?: UserProfileWhereUniqueInput;
};
