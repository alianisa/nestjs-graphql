import { Salon } from "../salon/Salon";
import { UserProfile } from "../userProfile/UserProfile";

export type EmployeeWorkSchedule = {
  breakEnd: Date;
  breakStart: Date;
  day_of_week?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  id: string;
  salons?: Salon;
  shiftEnd: Date;
  shiftStart: Date;
  userProfiles?: UserProfile;
};
