import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type EmployeeDailyStatWhereInput = {
  averageOrderAmount?: DecimalNullableFilter;
  averageServiceTime?: IntNullableFilter;
  avgServiceTimeChangePercent?: DecimalNullableFilter;
  avgServiceTimeTrend?: StringNullableFilter;
  bestServiceTime?: DateTimeNullableFilter;
  canceledOrders?: IntNullableFilter;
  cardRevenue?: DecimalNullableFilter;
  cashRevenue?: DecimalNullableFilter;
  clientsChangePercent?: DecimalNullableFilter;
  clientsTrend?: StringNullableFilter;
  completedOrders?: IntNullableFilter;
  createdAt?: DateTimeNullableFilter;
  dailyRating?: DecimalNullableFilter;
  date?: DateTimeFilter;
  efficiencyChangePercent?: DecimalNullableFilter;
  efficiencyRate?: DecimalNullableFilter;
  efficiencyTrend?: StringNullableFilter;
  firstOrderTime?: DateTimeNullableFilter;
  id?: StringFilter;
  lastOrderTime?: DateTimeNullableFilter;
  monthToDateOrders?: IntNullableFilter;
  monthToDateRevenue?: DecimalNullableFilter;
  newClients?: IntNullableFilter;
  offPeakOrders?: IntNullableFilter;
  ordersChangePercent?: DecimalNullableFilter;
  ordersCount?: IntNullableFilter;
  ordersTrend?: StringNullableFilter;
  overtimeHours?: DecimalNullableFilter;
  peakHoursOrders?: IntNullableFilter;
  performanceScore?: DecimalNullableFilter;
  prevMonthOrders?: IntNullableFilter;
  prevMonthRevenue?: DecimalNullableFilter;
  ratingChangePercent?: DecimalNullableFilter;
  ratingTrend?: StringNullableFilter;
  ratingsCount?: IntNullableFilter;
  repeatClients?: IntNullableFilter;
  revenue?: DecimalNullableFilter;
  revenueChangePercent?: DecimalNullableFilter;
  revenueTrend?: StringNullableFilter;
  salons?: SalonWhereUniqueInput;
  scheduledHours?: DecimalNullableFilter;
  servicesCount?: IntNullableFilter;
  totalBreaksTime?: IntNullableFilter;
  totalClients?: IntNullableFilter;
  totalIdleTime?: IntNullableFilter;
  totalWorkedHours?: DecimalNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userProfiles?: UserProfileWhereUniqueInput;
  workTime?: IntNullableFilter;
  worstServiceTime?: DateTimeNullableFilter;
};
