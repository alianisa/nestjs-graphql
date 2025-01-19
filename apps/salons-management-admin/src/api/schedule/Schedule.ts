import { UserProfile } from "../userProfile/UserProfile";

export type Schedule = {
  appointmentDate: Date;
  appointmentTime: Date;
  id: number;
  userProfilesScheduleBarberIdTouserProfiles?: UserProfile;
  userProfilesScheduleUserIdTouserProfiles?: UserProfile;
};
