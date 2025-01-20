import { UserProfile } from "../userProfile/UserProfile";

export type Notification = {
  body: string;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  title: string;
  userProfiles?: UserProfile;
};
