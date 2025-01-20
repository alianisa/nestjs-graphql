import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type EmployeeWorkScheduleCreateInput = {
  breakEnd: Date;
  breakStart: Date;
  day_of_week:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  salons: SalonWhereUniqueInput;
  shiftEnd: Date;
  shiftStart: Date;
  userProfiles: UserProfileWhereUniqueInput;
};
