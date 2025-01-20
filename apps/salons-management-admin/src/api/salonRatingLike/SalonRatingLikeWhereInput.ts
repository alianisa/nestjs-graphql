import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SalonRatingWhereUniqueInput } from "../salonRating/SalonRatingWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SalonRatingLikeWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  review?: StringNullableFilter;
  salonRatings?: SalonRatingWhereUniqueInput;
  salons?: SalonWhereUniqueInput;
  userProfilesSalonRatingLikesUserIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesSalonRatingLikesVoterIdTouserProfiles?: UserProfileWhereUniqueInput;
};
