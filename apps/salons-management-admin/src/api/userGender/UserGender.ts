import { UserProfile } from "../userProfile/UserProfile";

export type UserGender = {
  gender: string;
  id: string;
  userProfiles?: Array<UserProfile>;
};
