import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ScheduleWhereInput = {
  appointmentDate?: DateTimeFilter;
  appointmentTime?: DateTimeFilter;
  id?: IntFilter;
  userProfilesScheduleBarberIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesScheduleUserIdTouserProfiles?: UserProfileWhereUniqueInput;
};
