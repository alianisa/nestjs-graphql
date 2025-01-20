import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserFavoriteSalonWhereInput = {
  createdAt?: DateTimeFilter;
  favorite?: BooleanNullableFilter;
  id?: StringFilter;
  salons?: SalonWhereUniqueInput;
  userProfiles?: UserProfileWhereUniqueInput;
};
