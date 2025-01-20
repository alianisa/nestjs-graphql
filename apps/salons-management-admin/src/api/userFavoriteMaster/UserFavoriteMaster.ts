import { UserProfile } from "../userProfile/UserProfile";

export type UserFavoriteMaster = {
  createdAt: Date;
  favorite: boolean | null;
  id: string;
  userProfilesUserFavoriteMastersMasterIdTouserProfiles?: UserProfile;
  userProfilesUserFavoriteMastersUserIdTouserProfiles?: UserProfile | null;
};
