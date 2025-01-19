import { Salon } from "../salon/Salon";
import { UserProfile } from "../userProfile/UserProfile";

export type UserFavoriteSalon = {
  createdAt: Date;
  favorite: boolean | null;
  id: string;
  salons?: Salon;
  userProfiles?: UserProfile | null;
};
