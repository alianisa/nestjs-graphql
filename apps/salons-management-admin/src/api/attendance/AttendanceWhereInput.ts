import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type AttendanceWhereInput = {
  action?: "clock_in" | "clock_out" | "break_start" | "break_end" | "working";
  actionTime?: DateTimeNullableFilter;
  clockin?: DateTimeNullableFilter;
  clockout?: DateTimeNullableFilter;
  completed?: BooleanNullableFilter;
  createdAt?: DateTimeNullableFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  salons?: SalonWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
