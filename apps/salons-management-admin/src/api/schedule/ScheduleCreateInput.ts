import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ScheduleCreateInput = {
  appointmentDate: Date;
  appointmentTime: Date;
  userProfilesScheduleBarberIdTouserProfiles: UserProfileWhereUniqueInput;
  userProfilesScheduleUserIdTouserProfiles: UserProfileWhereUniqueInput;
};
