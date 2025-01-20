import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserFavoriteMasterUpdateInput = {
  createdAt?: Date;
  favorite?: boolean | null;
  userProfilesUserFavoriteMastersMasterIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesUserFavoriteMastersUserIdTouserProfiles?: UserProfileWhereUniqueInput | null;
};
