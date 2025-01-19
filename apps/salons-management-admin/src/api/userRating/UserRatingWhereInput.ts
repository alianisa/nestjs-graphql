import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserRatingWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  orders?: OrderWhereUniqueInput;
  rating?: DecimalFilter;
  review?: StringNullableFilter;
  userProfilesUserRatingsOwnerTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesUserRatingsUserIdTouserProfiles?: UserProfileWhereUniqueInput;
};
