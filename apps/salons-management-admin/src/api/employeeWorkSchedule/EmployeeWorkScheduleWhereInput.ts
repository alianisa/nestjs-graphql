import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type EmployeeWorkScheduleWhereInput = {
  breakEnd?: DateTimeFilter;
  breakStart?: DateTimeFilter;
  day_of_week?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  id?: StringFilter;
  salons?: SalonWhereUniqueInput;
  shiftEnd?: DateTimeFilter;
  shiftStart?: DateTimeFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
