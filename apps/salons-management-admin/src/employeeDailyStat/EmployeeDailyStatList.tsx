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

export const EmployeeDailyStatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmployeeDailyStats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Average Order Amount" source="averageOrderAmount" />
        <TextField label="Average Service Time" source="averageServiceTime" />
        <TextField
          label="Avg Service Time Change Percent"
          source="avgServiceTimeChangePercent"
        />
        <TextField
          label="Avg Service Time Trend"
          source="avgServiceTimeTrend"
        />
        <TextField label="Best Service Time" source="bestServiceTime" />
        <TextField label="Canceled Orders" source="canceledOrders" />
        <TextField label="Card Revenue" source="cardRevenue" />
        <TextField label="Cash Revenue" source="cashRevenue" />
        <TextField
          label="Clients Change Percent"
          source="clientsChangePercent"
        />
        <TextField label="Clients Trend" source="clientsTrend" />
        <TextField label="Completed Orders" source="completedOrders" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Daily Rating" source="dailyRating" />
        <TextField label="Date" source="date" />
        <TextField
          label="Efficiency Change Percent"
          source="efficiencyChangePercent"
        />
        <TextField label="Efficiency Rate" source="efficiencyRate" />
        <TextField label="Efficiency Trend" source="efficiencyTrend" />
        <TextField label="First Order Time" source="firstOrderTime" />
        <TextField label="ID" source="id" />
        <TextField label="Last Order Time" source="lastOrderTime" />
        <TextField label="Month To Date Orders" source="monthToDateOrders" />
        <TextField label="Month To Date Revenue" source="monthToDateRevenue" />
        <TextField label="New Clients" source="newClients" />
        <TextField label="Off Peak Orders" source="offPeakOrders" />
        <TextField label="Orders Change Percent" source="ordersChangePercent" />
        <TextField label="Orders Count" source="ordersCount" />
        <TextField label="Orders Trend" source="ordersTrend" />
        <TextField label="Overtime Hours" source="overtimeHours" />
        <TextField label="Peak Hours Orders" source="peakHoursOrders" />
        <TextField label="Performance Score" source="performanceScore" />
        <TextField label="Prev Month Orders" source="prevMonthOrders" />
        <TextField label="Prev Month Revenue" source="prevMonthRevenue" />
        <TextField label="Rating Change Percent" source="ratingChangePercent" />
        <TextField label="Rating Trend" source="ratingTrend" />
        <TextField label="Ratings Count" source="ratingsCount" />
        <TextField label="Repeat Clients" source="repeatClients" />
        <TextField label="Revenue" source="revenue" />
        <TextField
          label="Revenue Change Percent"
          source="revenueChangePercent"
        />
        <TextField label="Revenue Trend" source="revenueTrend" />
        <ReferenceField label="Salons" source="salon.id" reference="Salon">
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Scheduled Hours" source="scheduledHours" />
        <TextField label="Services Count" source="servicesCount" />
        <TextField label="Total Breaks Time" source="totalBreaksTime" />
        <TextField label="Total Clients" source="totalClients" />
        <TextField label="Total Idle Time" source="totalIdleTime" />
        <TextField label="Total Worked Hours" source="totalWorkedHours" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Work Time" source="workTime" />
        <TextField label="Worst Service Time" source="worstServiceTime" />{" "}
      </Datagrid>
    </List>
  );
};
