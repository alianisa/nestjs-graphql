import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserFavoriteMasterCreateInput = {
  createdAt: Date;
  favorite?: boolean | null;
  userProfilesUserFavoriteMastersMasterIdTouserProfiles: UserProfileWhereUniqueInput;
  userProfilesUserFavoriteMastersUserIdTouserProfiles?: UserProfileWhereUniqueInput | null;
};
