import { UserProfile } from "../userProfile/UserProfile";

export type UserAddress = {
  createdAt: Date;
  description: string | null;
  id: string;
  lat: number | null;
  lng: number | null;
  name: string | null;
  updatedAt: Date | null;
  userProfiles?: UserProfile;
};
