import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalonTitle } from "../salon/SalonTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const EmployeeStatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Average Order Amount" source="averageOrderAmount" />
        <NumberInput
          step={1}
          label="Average Order Duration"
          source="averageOrderDuration"
        />
        <NumberInput label="Average Rating" source="averageRating" />
        <NumberInput
          step={1}
          label="Average Service Time"
          source="averageServiceTime"
        />
        <NumberInput
          label="Canceled Orders Count"
          source="canceledOrdersCount"
        />
        <NumberInput label="Card Payments Amount" source="cardPaymentsAmount" />
        <NumberInput label="Cash Payments Amount" source="cashPaymentsAmount" />
        <NumberInput label="Consistency Score" source="consistencyScore" />
        <NumberInput label="Conversion Rate" source="conversionRate" />
        <NumberInput
          step={1}
          label="Current Month Orders"
          source="currentMonthOrders"
        />
        <NumberInput
          label="Current Month Revenue"
          source="currentMonthRevenue"
        />
        <NumberInput
          label="Efficiency Change Percent"
          source="efficiencyChangePercent"
        />
        <NumberInput label="Efficiency Rate" source="efficiencyRate" />
        <NumberInput label="Efficiency Score" source="efficiencyScore" />
        <TextInput label="Efficiency Trend" source="efficiencyTrend" />
        <NumberInput label="Execution Rate" source="executionRate" />
        <NumberInput label="Fill Rate" source="fillRate" />
        <DateTimeInput label="Last Order At" source="lastOrderAt" />
        <NumberInput
          step={1}
          label="Negative Reviews"
          source="negativeReviews"
        />
        <NumberInput
          label="Orders Change Percent"
          source="ordersChangePercent"
        />
        <NumberInput label="Orders Growth Rate" source="ordersGrowthRate" />
        <NumberInput label="Orders Per Day" source="ordersPerDay" />
        <TextInput label="Orders Trend" source="ordersTrend" />
        <NumberInput step={1} label="Overtime Count" source="overtimeCount" />
        <NumberInput
          step={1}
          label="Peak Hours Orders"
          source="peakHoursOrders"
        />
        <NumberInput
          label="Peak Performance Rate"
          source="peakPerformanceRate"
        />
        <NumberInput
          label="Performance Change Percent"
          source="performanceChangePercent"
        />
        <NumberInput label="Performance Score" source="performanceScore" />
        <TextInput label="Performance Trend" source="performanceTrend" />
        <NumberInput
          step={1}
          label="Positive Reviews"
          source="positiveReviews"
        />
        <NumberInput
          label="Prev Month Efficiency Rate"
          source="prevMonthEfficiencyRate"
        />
        <NumberInput
          label="Prev Month Performance Score"
          source="prevMonthPerformanceScore"
        />
        <NumberInput
          step={1}
          label="Prev Month Total Orders"
          source="prevMonthTotalOrders"
        />
        <NumberInput
          label="Prev Month Total Revenue"
          source="prevMonthTotalRevenue"
        />
        <NumberInput
          step={1}
          label="Previous Month Orders"
          source="previousMonthOrders"
        />
        <NumberInput
          label="Previous Month Revenue"
          source="previousMonthRevenue"
        />
        <NumberInput label="Quality Score" source="qualityScore" />
        <NumberInput label="Rating" source="rating" />
        <NumberInput
          label="Rating Change Percent"
          source="ratingChangePercent"
        />
        <TextInput label="Rating Trend" source="ratingTrend" />
        <NumberInput
          label="Revenue Change Percent"
          source="revenueChangePercent"
        />
        <NumberInput label="Revenue Growth Rate" source="revenueGrowthRate" />
        <NumberInput label="Revenue Per Hour" source="revenuePerHour" />
        <TextInput label="Revenue Trend" source="revenueTrend" />
        <ReferenceInput source="salons.id" reference="Salon" label="Salons">
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
        <NumberInput
          label="Services Change Percent"
          source="servicesChangePercent"
        />
        <NumberInput label="Services Growth Rate" source="servicesGrowthRate" />
        <NumberInput label="Services Per Hour" source="servicesPerHour" />
        <TextInput label="Services Trend" source="servicesTrend" />
        <NumberInput label="Total Downtime Hours" source="totalDowntimeHours" />
        <NumberInput label="Total Execution Time" source="totalExecutionTime" />
        <NumberInput label="Total Idle Time" source="totalIdleTime" />
        <NumberInput step={1} label="Total Orders" source="totalOrders" />
        <NumberInput step={1} label="Total Ratings" source="totalRatings" />
        <NumberInput label="Total Revenue" source="totalRevenue" />
        <NumberInput step={1} label="Total Services" source="totalServices" />
        <NumberInput step={1} label="Total Work Time" source="totalWorkTime" />
        <NumberInput label="Total Worked Hours" source="totalWorkedHours" />
        <ReferenceInput
          source="userProfiles.id"
          reference="UserProfile"
          label="User Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <NumberInput label="Utilization Rate" source="utilizationRate" />
        <NumberInput label="Workload Percentage" source="workloadPercentage" />
        <NumberInput
          step={1}
          label="Year To Date Orders"
          source="yearToDateOrders"
        />
        <NumberInput label="Year To Date Revenue" source="yearToDateRevenue" />
        <NumberInput
          step={1}
          label="Year To Date Services"
          source="yearToDateServices"
        />
      </SimpleForm>
    </Create>
  );
};
