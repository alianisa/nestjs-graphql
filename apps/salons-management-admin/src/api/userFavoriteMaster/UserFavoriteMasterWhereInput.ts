import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserFavoriteMasterWhereInput = {
  createdAt?: DateTimeFilter;
  favorite?: BooleanNullableFilter;
  id?: StringFilter;
  userProfilesUserFavoriteMastersMasterIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesUserFavoriteMastersUserIdTouserProfiles?: UserProfileWhereUniqueInput;
};
