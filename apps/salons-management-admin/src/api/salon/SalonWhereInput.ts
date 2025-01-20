import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeDailyStatListRelationFilter } from "../employeeDailyStat/EmployeeDailyStatListRelationFilter";
import { EmployeeStatListRelationFilter } from "../employeeStat/EmployeeStatListRelationFilter";
import { EmployeeTaskListRelationFilter } from "../employeeTask/EmployeeTaskListRelationFilter";
import { EmployeeWorkScheduleListRelationFilter } from "../employeeWorkSchedule/EmployeeWorkScheduleListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";
import { SalonAccountListRelationFilter } from "../salonAccount/SalonAccountListRelationFilter";
import { SalonRatingLikeListRelationFilter } from "../salonRatingLike/SalonRatingLikeListRelationFilter";
import { SalonRatingListRelationFilter } from "../salonRating/SalonRatingListRelationFilter";
import { SalonServiceListRelationFilter } from "../salonService/SalonServiceListRelationFilter";
import { TimeSlotListRelationFilter } from "../timeSlot/TimeSlotListRelationFilter";
import { UserAccountListRelationFilter } from "../userAccount/UserAccountListRelationFilter";
import { UserFavoriteSalonListRelationFilter } from "../userFavoriteSalon/UserFavoriteSalonListRelationFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";

export type SalonWhereInput = {
  active?: BooleanNullableFilter;
  address?: StringNullableFilter;
  attendances?: AttendanceListRelationFilter;
  barbers?: StringNullableFilter;
  categories?: JsonFilter;
  closeTime?: DateTimeNullableFilter;
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  email?: StringNullableFilter;
  employeeDailyStats?: EmployeeDailyStatListRelationFilter;
  employeeStats?: EmployeeStatListRelationFilter;
  employeeTasks?: EmployeeTaskListRelationFilter;
  employeeWorkSchedules?: EmployeeWorkScheduleListRelationFilter;
  id?: StringFilter;
  images?: StringFilter;
  img?: StringNullableFilter;
  latLng?: JsonFilter;
  location?: JsonFilter;
  logo?: StringNullableFilter;
  name?: StringFilter;
  open?: BooleanNullableFilter;
  openTime?: DateTimeNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: StringFilter;
  queues?: QueueListRelationFilter;
  salonAccounts?: SalonAccountListRelationFilter;
  salonRatingLikes?: SalonRatingLikeListRelationFilter;
  salonRatings?: SalonRatingListRelationFilter;
  salonServices?: SalonServiceListRelationFilter;
  timeSlots?: TimeSlotListRelationFilter;
  timezone?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
  userAccounts?: UserAccountListRelationFilter;
  userFavoriteSalons?: UserFavoriteSalonListRelationFilter;
  userProfilesSalonsSalonAdminIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesUserProfilesSalonIdTosalons?: UserProfileListRelationFilter;
  website?: StringNullableFilter;
};
