import { SortOrder } from "../../util/SortOrder";

export type EmployeeStatOrderByInput = {
  averageOrderAmount?: SortOrder;
  averageOrderDuration?: SortOrder;
  averageRating?: SortOrder;
  averageServiceTime?: SortOrder;
  canceledOrdersCount?: SortOrder;
  cardPaymentsAmount?: SortOrder;
  cashPaymentsAmount?: SortOrder;
  consistencyScore?: SortOrder;
  conversionRate?: SortOrder;
  createdAt?: SortOrder;
  currentMonthOrders?: SortOrder;
  currentMonthRevenue?: SortOrder;
  efficiencyChangePercent?: SortOrder;
  efficiencyRate?: SortOrder;
  efficiencyScore?: SortOrder;
  efficiencyTrend?: SortOrder;
  executionRate?: SortOrder;
  fillRate?: SortOrder;
  id?: SortOrder;
  lastOrderAt?: SortOrder;
  negativeReviews?: SortOrder;
  ordersChangePercent?: SortOrder;
  ordersGrowthRate?: SortOrder;
  ordersPerDay?: SortOrder;
  ordersTrend?: SortOrder;
  overtimeCount?: SortOrder;
  peakHoursOrders?: SortOrder;
  peakPerformanceRate?: SortOrder;
  performanceChangePercent?: SortOrder;
  performanceScore?: SortOrder;
  performanceTrend?: SortOrder;
  positiveReviews?: SortOrder;
  prevMonthEfficiencyRate?: SortOrder;
  prevMonthPerformanceScore?: SortOrder;
  prevMonthTotalOrders?: SortOrder;
  prevMonthTotalRevenue?: SortOrder;
  previousMonthOrders?: SortOrder;
  previousMonthRevenue?: SortOrder;
  qualityScore?: SortOrder;
  rating?: SortOrder;
  ratingChangePercent?: SortOrder;
  ratingTrend?: SortOrder;
  revenueChangePercent?: SortOrder;
  revenueGrowthRate?: SortOrder;
  revenuePerHour?: SortOrder;
  revenueTrend?: SortOrder;
  salon_id?: SortOrder;
  servicesChangePercent?: SortOrder;
  servicesGrowthRate?: SortOrder;
  servicesPerHour?: SortOrder;
  servicesTrend?: SortOrder;
  totalDowntimeHours?: SortOrder;
  totalExecutionTime?: SortOrder;
  totalIdleTime?: SortOrder;
  totalOrders?: SortOrder;
  totalRatings?: SortOrder;
  totalRevenue?: SortOrder;
  totalServices?: SortOrder;
  totalWorkTime?: SortOrder;
  totalWorkedHours?: SortOrder;
  updatedAt?: SortOrder;
  employee_id?: SortOrder;
  utilizationRate?: SortOrder;
  workloadPercentage?: SortOrder;
  yearToDateOrders?: SortOrder;
  yearToDateRevenue?: SortOrder;
  yearToDateServices?: SortOrder;
};
