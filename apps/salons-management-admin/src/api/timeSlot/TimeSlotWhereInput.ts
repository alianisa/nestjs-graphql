import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type TimeSlotWhereInput = {
  appointments?: AppointmentListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  salons?: SalonWhereUniqueInput;
  slotDate?: DateTimeNullableFilter;
  slotTime?: DateTimeFilter;
  startTime?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
