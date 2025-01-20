import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ScheduleUpdateInput = {
  appointmentDate?: Date;
  appointmentTime?: Date;
  userProfilesScheduleBarberIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesScheduleUserIdTouserProfiles?: UserProfileWhereUniqueInput;
};
