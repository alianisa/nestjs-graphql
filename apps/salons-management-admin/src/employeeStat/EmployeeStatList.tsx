import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const EmployeeStatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmployeeStats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Average Order Amount" source="averageOrderAmount" />
        <TextField
          label="Average Order Duration"
          source="averageOrderDuration"
        />
        <TextField label="Average Rating" source="averageRating" />
        <TextField label="Average Service Time" source="averageServiceTime" />
        <TextField label="Canceled Orders Count" source="canceledOrdersCount" />
        <TextField label="Card Payments Amount" source="cardPaymentsAmount" />
        <TextField label="Cash Payments Amount" source="cashPaymentsAmount" />
        <TextField label="Consistency Score" source="consistencyScore" />
        <TextField label="Conversion Rate" source="conversionRate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Current Month Orders" source="currentMonthOrders" />
        <TextField label="Current Month Revenue" source="currentMonthRevenue" />
        <TextField
          label="Efficiency Change Percent"
          source="efficiencyChangePercent"
        />
        <TextField label="Efficiency Rate" source="efficiencyRate" />
        <TextField label="Efficiency Score" source="efficiencyScore" />
        <TextField label="Efficiency Trend" source="efficiencyTrend" />
        <TextField label="Execution Rate" source="executionRate" />
        <TextField label="Fill Rate" source="fillRate" />
        <TextField label="ID" source="id" />
        <TextField label="Last Order At" source="lastOrderAt" />
        <TextField label="Negative Reviews" source="negativeReviews" />
        <TextField label="Orders Change Percent" source="ordersChangePercent" />
        <TextField label="Orders Growth Rate" source="ordersGrowthRate" />
        <TextField label="Orders Per Day" source="ordersPerDay" />
        <TextField label="Orders Trend" source="ordersTrend" />
        <TextField label="Overtime Count" source="overtimeCount" />
        <TextField label="Peak Hours Orders" source="peakHoursOrders" />
        <TextField label="Peak Performance Rate" source="peakPerformanceRate" />
        <TextField
          label="Performance Change Percent"
          source="performanceChangePercent"
        />
        <TextField label="Performance Score" source="performanceScore" />
        <TextField label="Performance Trend" source="performanceTrend" />
        <TextField label="Positive Reviews" source="positiveReviews" />
        <TextField
          label="Prev Month Efficiency Rate"
          source="prevMonthEfficiencyRate"
        />
        <TextField
          label="Prev Month Performance Score"
          source="prevMonthPerformanceScore"
        />
        <TextField
          label="Prev Month Total Orders"
          source="prevMonthTotalOrders"
        />
        <TextField
          label="Prev Month Total Revenue"
          source="prevMonthTotalRevenue"
        />
        <TextField label="Previous Month Orders" source="previousMonthOrders" />
        <TextField
          label="Previous Month Revenue"
          source="previousMonthRevenue"
        />
        <TextField label="Quality Score" source="qualityScore" />
        <TextField label="Rating" source="rating" />
        <TextField label="Rating Change Percent" source="ratingChangePercent" />
        <TextField label="Rating Trend" source="ratingTrend" />
        <TextField
          label="Revenue Change Percent"
          source="revenueChangePercent"
        />
        <TextField label="Revenue Growth Rate" source="revenueGrowthRate" />
        <TextField label="Revenue Per Hour" source="revenuePerHour" />
        <TextField label="Revenue Trend" source="revenueTrend" />
        <ReferenceField label="Salons" source="salon.id" reference="Salon">
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Services Change Percent"
          source="servicesChangePercent"
        />
        <TextField label="Services Growth Rate" source="servicesGrowthRate" />
        <TextField label="Services Per Hour" source="servicesPerHour" />
        <TextField label="Services Trend" source="servicesTrend" />
        <TextField label="Total Downtime Hours" source="totalDowntimeHours" />
        <TextField label="Total Execution Time" source="totalExecutionTime" />
        <TextField label="Total Idle Time" source="totalIdleTime" />
        <TextField label="Total Orders" source="totalOrders" />
        <TextField label="Total Ratings" source="totalRatings" />
        <TextField label="Total Revenue" source="totalRevenue" />
        <TextField label="Total Services" source="totalServices" />
        <TextField label="Total Work Time" source="totalWorkTime" />
        <TextField label="Total Worked Hours" source="totalWorkedHours" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Utilization Rate" source="utilizationRate" />
        <TextField label="Workload Percentage" source="workloadPercentage" />
        <TextField label="Year To Date Orders" source="yearToDateOrders" />
        <TextField label="Year To Date Revenue" source="yearToDateRevenue" />
        <TextField
          label="Year To Date Services"
          source="yearToDateServices"
        />{" "}
      </Datagrid>
    </List>
  );
};
