import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalonTitle } from "../salon/SalonTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const EmployeeDailyStatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Average Order Amount" source="averageOrderAmount" />
        <NumberInput
          step={1}
          label="Average Service Time"
          source="averageServiceTime"
        />
        <NumberInput
          label="Avg Service Time Change Percent"
          source="avgServiceTimeChangePercent"
        />
        <TextInput
          label="Avg Service Time Trend"
          source="avgServiceTimeTrend"
        />
        <DateTimeInput label="Best Service Time" source="bestServiceTime" />
        <NumberInput step={1} label="Canceled Orders" source="canceledOrders" />
        <NumberInput label="Card Revenue" source="cardRevenue" />
        <NumberInput label="Cash Revenue" source="cashRevenue" />
        <NumberInput
          label="Clients Change Percent"
          source="clientsChangePercent"
        />
        <TextInput label="Clients Trend" source="clientsTrend" />
        <NumberInput
          step={1}
          label="Completed Orders"
          source="completedOrders"
        />
        <NumberInput label="Daily Rating" source="dailyRating" />
        <DateTimeInput label="Date" source="date" />
        <NumberInput
          label="Efficiency Change Percent"
          source="efficiencyChangePercent"
        />
        <NumberInput label="Efficiency Rate" source="efficiencyRate" />
        <TextInput label="Efficiency Trend" source="efficiencyTrend" />
        <DateTimeInput label="First Order Time" source="firstOrderTime" />
        <DateTimeInput label="Last Order Time" source="lastOrderTime" />
        <NumberInput
          step={1}
          label="Month To Date Orders"
          source="monthToDateOrders"
        />
        <NumberInput
          label="Month To Date Revenue"
          source="monthToDateRevenue"
        />
        <NumberInput step={1} label="New Clients" source="newClients" />
        <NumberInput step={1} label="Off Peak Orders" source="offPeakOrders" />
        <NumberInput
          label="Orders Change Percent"
          source="ordersChangePercent"
        />
        <NumberInput step={1} label="Orders Count" source="ordersCount" />
        <TextInput label="Orders Trend" source="ordersTrend" />
        <NumberInput label="Overtime Hours" source="overtimeHours" />
        <NumberInput
          step={1}
          label="Peak Hours Orders"
          source="peakHoursOrders"
        />
        <NumberInput label="Performance Score" source="performanceScore" />
        <NumberInput
          step={1}
          label="Prev Month Orders"
          source="prevMonthOrders"
        />
        <NumberInput label="Prev Month Revenue" source="prevMonthRevenue" />
        <NumberInput
          label="Rating Change Percent"
          source="ratingChangePercent"
        />
        <TextInput label="Rating Trend" source="ratingTrend" />
        <NumberInput step={1} label="Ratings Count" source="ratingsCount" />
        <NumberInput step={1} label="Repeat Clients" source="repeatClients" />
        <NumberInput label="Revenue" source="revenue" />
        <NumberInput
          label="Revenue Change Percent"
          source="revenueChangePercent"
        />
        <TextInput label="Revenue Trend" source="revenueTrend" />
        <ReferenceInput source="salons.id" reference="Salon" label="Salons">
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
        <NumberInput label="Scheduled Hours" source="scheduledHours" />
        <NumberInput step={1} label="Services Count" source="servicesCount" />
        <NumberInput
          step={1}
          label="Total Breaks Time"
          source="totalBreaksTime"
        />
        <NumberInput step={1} label="Total Clients" source="totalClients" />
        <NumberInput step={1} label="Total Idle Time" source="totalIdleTime" />
        <NumberInput label="Total Worked Hours" source="totalWorkedHours" />
        <ReferenceInput
          source="userProfiles.id"
          reference="UserProfile"
          label="User Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Work Time" source="workTime" />
        <DateTimeInput label="Worst Service Time" source="worstServiceTime" />
      </SimpleForm>
    </Edit>
  );
};
