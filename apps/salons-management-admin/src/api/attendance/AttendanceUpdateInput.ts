import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type AttendanceUpdateInput = {
  action?:
    | "clock_in"
    | "clock_out"
    | "break_start"
    | "break_end"
    | "working"
    | null;
  actionTime?: Date | null;
  clockin?: Date | null;
  clockout?: Date | null;
  completed?: boolean | null;
  createdAt?: Date | null;
  date?: Date;
  salons?: SalonWhereUniqueInput;
  updatedAt?: Date | null;
  userProfiles?: UserProfileWhereUniqueInput;
};
