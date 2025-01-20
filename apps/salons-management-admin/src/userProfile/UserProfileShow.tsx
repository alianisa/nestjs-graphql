import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { USERPROFILE_TITLE_FIELD } from "./UserProfileTitle";
import { SALON_TITLE_FIELD } from "../salon/SalonTitle";
import { CHATMESSAGE_TITLE_FIELD } from "../chatMessage/ChatMessageTitle";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { PROMOCODE_TITLE_FIELD } from "../promocode/PromocodeTitle";
import { SALONRATING_TITLE_FIELD } from "../salonRating/SalonRatingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { USERGENDER_TITLE_FIELD } from "../userGender/UserGenderTitle";
import { USERNOTIFICATIONSETTING_TITLE_FIELD } from "../userNotificationSetting/UserNotificationSettingTitle";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Avatar Url" source="avatarUrl" />
        <TextField label="Bio" source="bio" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Date Of Birth" source="dateOfBirth" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Email" source="email" />
        <TextField label="Employee Dismissal At" source="employeeDismissalAt" />
        <TextField
          label="Employee Employment At"
          source="employeeEmploymentAt"
        />
        <TextField label="First Name" source="firstName" />
        <TextField label="Full Name" source="fullName" />
        <BooleanField label="Full Registered" source="fullRegistered" />
        <TextField label="Hired Date" source="hiredDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Admin" source="isAdmin" />
        <BooleanField label="Is Barber" source="isBarber" />
        <BooleanField label="Is Employee" source="isEmployee" />
        <TextField label="Job Title" source="jobTitle" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Location" source="location" />
        <TextField label="Loyalty Points" source="loyaltyPoints" />
        <TextField label="Phone" source="phone" />
        <ReferenceField
          label="Salons User Profiles Salon Id Tosalons"
          source="salon.id"
          reference="Salon"
        >
          <TextField source={SALON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Genders"
          source="usergender.id"
          reference="UserGender"
        >
          <TextField source={USERGENDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Notification Settings"
          source="usernotificationsetting.id"
          reference="UserNotificationSetting"
        >
          <TextField source={USERNOTIFICATIONSETTING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Website" source="website" />
        <ReferenceManyField
          reference="Appointment"
          target="user_id"
          label="Appointments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Appointment Date" source="appointmentDate" />
            <TextField label="Employee Id" source="employeeId" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Orders Appointments Order Id Toorders"
              source="order.id"
              reference="Order"
            >
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Slots"
              source="timeslot.id"
              reference="TimeSlot"
            >
              <TextField source={TIMESLOT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Attendance"
          target="employee_id"
          label="Attendances"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action" source="action" />
            <TextField label="Action Time" source="actionTime" />
            <TextField label="Clockin" source="clockin" />
            <TextField label="Clockout" source="clockout" />
            <BooleanField label="Completed" source="completed" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ChatMessage"
          target="user"
          label="ChatMessages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Chat Messages"
              source="chatmessage.id"
              reference="ChatMessage"
            >
              <TextField source={CHATMESSAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Text" source="text" />
            <TextField label="Timestamp" source="timestamp" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Chat" target="user_a" label="Chats">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <TextField label="Last Message" source="lastMessage" />
            <TextField label="Last Message Time" source="lastMessageTime" />
            <ReferenceField
              label="User Profiles Chats User A Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Chats User B Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Chats Users Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Chat" target="user_b" label="Chats">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <TextField label="Last Message" source="lastMessage" />
            <TextField label="Last Message Time" source="lastMessageTime" />
            <ReferenceField
              label="User Profiles Chats User A Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Chats User B Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Chats Users Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Chat" target="users" label="Chats">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <TextField label="Last Message" source="lastMessage" />
            <TextField label="Last Message Time" source="lastMessageTime" />
            <ReferenceField
              label="User Profiles Chats User A Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Chats User B Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Chats Users Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeDailyStat"
          target="employee_id"
          label="EmployeeDailyStats"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Average Order Amount"
              source="averageOrderAmount"
            />
            <TextField
              label="Average Service Time"
              source="averageServiceTime"
            />
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
            <TextField
              label="Month To Date Orders"
              source="monthToDateOrders"
            />
            <TextField
              label="Month To Date Revenue"
              source="monthToDateRevenue"
            />
            <TextField label="New Clients" source="newClients" />
            <TextField label="Off Peak Orders" source="offPeakOrders" />
            <TextField
              label="Orders Change Percent"
              source="ordersChangePercent"
            />
            <TextField label="Orders Count" source="ordersCount" />
            <TextField label="Orders Trend" source="ordersTrend" />
            <TextField label="Overtime Hours" source="overtimeHours" />
            <TextField label="Peak Hours Orders" source="peakHoursOrders" />
            <TextField label="Performance Score" source="performanceScore" />
            <TextField label="Prev Month Orders" source="prevMonthOrders" />
            <TextField label="Prev Month Revenue" source="prevMonthRevenue" />
            <TextField
              label="Rating Change Percent"
              source="ratingChangePercent"
            />
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
            <TextField label="Worst Service Time" source="worstServiceTime" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeStat"
          target="employee_id"
          label="EmployeeStats"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Average Order Amount"
              source="averageOrderAmount"
            />
            <TextField
              label="Average Order Duration"
              source="averageOrderDuration"
            />
            <TextField label="Average Rating" source="averageRating" />
            <TextField
              label="Average Service Time"
              source="averageServiceTime"
            />
            <TextField
              label="Canceled Orders Count"
              source="canceledOrdersCount"
            />
            <TextField
              label="Card Payments Amount"
              source="cardPaymentsAmount"
            />
            <TextField
              label="Cash Payments Amount"
              source="cashPaymentsAmount"
            />
            <TextField label="Consistency Score" source="consistencyScore" />
            <TextField label="Conversion Rate" source="conversionRate" />
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="Current Month Orders"
              source="currentMonthOrders"
            />
            <TextField
              label="Current Month Revenue"
              source="currentMonthRevenue"
            />
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
            <TextField
              label="Orders Change Percent"
              source="ordersChangePercent"
            />
            <TextField label="Orders Growth Rate" source="ordersGrowthRate" />
            <TextField label="Orders Per Day" source="ordersPerDay" />
            <TextField label="Orders Trend" source="ordersTrend" />
            <TextField label="Overtime Count" source="overtimeCount" />
            <TextField label="Peak Hours Orders" source="peakHoursOrders" />
            <TextField
              label="Peak Performance Rate"
              source="peakPerformanceRate"
            />
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
            <TextField
              label="Previous Month Orders"
              source="previousMonthOrders"
            />
            <TextField
              label="Previous Month Revenue"
              source="previousMonthRevenue"
            />
            <TextField label="Quality Score" source="qualityScore" />
            <TextField label="Rating" source="rating" />
            <TextField
              label="Rating Change Percent"
              source="ratingChangePercent"
            />
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
            <TextField
              label="Services Growth Rate"
              source="servicesGrowthRate"
            />
            <TextField label="Services Per Hour" source="servicesPerHour" />
            <TextField label="Services Trend" source="servicesTrend" />
            <TextField
              label="Total Downtime Hours"
              source="totalDowntimeHours"
            />
            <TextField
              label="Total Execution Time"
              source="totalExecutionTime"
            />
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
            <TextField
              label="Workload Percentage"
              source="workloadPercentage"
            />
            <TextField label="Year To Date Orders" source="yearToDateOrders" />
            <TextField
              label="Year To Date Revenue"
              source="yearToDateRevenue"
            />
            <TextField
              label="Year To Date Services"
              source="yearToDateServices"
            />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeTask"
          target="employee_id"
          label="EmployeeTasks"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Actual Duration" source="actualDuration" />
            <TextField label="Actual Start Time" source="actualStartTime" />
            <ReferenceField
              label="Appointments"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Completed At" source="completedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Estimated Duration" source="estimatedDuration" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <TextField label="Order Type" source="order_type" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Queues" source="queue.id" reference="Queue">
              <TextField source={QUEUE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Scheduled Start Time"
              source="scheduledStartTime"
            />
            <TextField label="Task Status" source="task_status" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeWorkSchedule"
          target="employee_id"
          label="EmployeeWorkSchedules"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Break End" source="breakEnd" />
            <TextField label="Break Start" source="breakStart" />
            <TextField label="Day Of Week" source="day_of_week" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Shift End" source="shiftEnd" />
            <TextField label="Shift Start" source="shiftStart" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LoyaltyTransaction"
          target="user_id"
          label="LoyaltyTransactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Points Earned" source="pointsEarned" />
            <TextField label="Points Spent" source="pointsSpent" />
            <TextField label="Transaction Type" source="transactionType" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="user_id"
          label="Notifications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Body" source="body" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Image Url" source="imageUrl" />
            <TextField label="Title" source="title" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Order"
          target="employee_id"
          label="Orders"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="Appointments Orders Appointment Id Toappointments"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Canceled" source="canceled" />
            <TextField label="Canceled Reason" source="canceledReason" />
            <BooleanField label="Completed" source="completed" />
            <TextField label="Completed At" source="completedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Deposit Amount" source="depositAmount" />
            <TextField label="Discount" source="discount" />
            <TextField label="Discount Amount" source="discountAmount" />
            <ReferenceField
              label="Discounts"
              source="discount.id"
              reference="Discount"
            >
              <TextField source={DISCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField
              label="Loyalty Points Earned"
              source="loyaltyPointsEarned"
            />
            <TextField label="Loyalty Points Used" source="loyaltyPointsUsed" />
            <TextField label="Order Image Id" source="orderImageId" />
            <TextField label="Order Number" source="orderNumber" />
            <TextField label="Order Type" source="order_type" />
            <ReferenceField
              label="Payments"
              source="payment.id"
              reference="Payment"
            >
              <TextField source={PAYMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Promocodes"
              source="promocode.id"
              reference="Promocode"
            >
              <TextField source={PROMOCODE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Queues Orders Queue Id Toqueues"
              source="queue.id"
              reference="Queue"
            >
              <TextField source={QUEUE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Services" source="services" />
            <BooleanField label="Started" source="started" />
            <TextField label="Started At" source="startedAt" />
            <TextField label="Status" source="status" />
            <TextField label="Total Amount" source="totalAmount" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles Orders Employee Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Orders User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="user_id" label="Orders">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="Appointments Orders Appointment Id Toappointments"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Canceled" source="canceled" />
            <TextField label="Canceled Reason" source="canceledReason" />
            <BooleanField label="Completed" source="completed" />
            <TextField label="Completed At" source="completedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Deposit Amount" source="depositAmount" />
            <TextField label="Discount" source="discount" />
            <TextField label="Discount Amount" source="discountAmount" />
            <ReferenceField
              label="Discounts"
              source="discount.id"
              reference="Discount"
            >
              <TextField source={DISCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField
              label="Loyalty Points Earned"
              source="loyaltyPointsEarned"
            />
            <TextField label="Loyalty Points Used" source="loyaltyPointsUsed" />
            <TextField label="Order Image Id" source="orderImageId" />
            <TextField label="Order Number" source="orderNumber" />
            <TextField label="Order Type" source="order_type" />
            <ReferenceField
              label="Payments"
              source="payment.id"
              reference="Payment"
            >
              <TextField source={PAYMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Promocodes"
              source="promocode.id"
              reference="Promocode"
            >
              <TextField source={PROMOCODE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Queues Orders Queue Id Toqueues"
              source="queue.id"
              reference="Queue"
            >
              <TextField source={QUEUE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Services" source="services" />
            <BooleanField label="Started" source="started" />
            <TextField label="Started At" source="startedAt" />
            <TextField label="Status" source="status" />
            <TextField label="Total Amount" source="totalAmount" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles Orders Employee Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Orders User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payroll"
          target="employee_id"
          label="Payrolls"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Queue"
          target="employee_id"
          label="Queues"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Completed" source="completed" />
            <TextField label="Completed At" source="completedAt" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Estimated Wait Time" source="estimatedWaitTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Orders Queues Order Id Toorders"
              source="order.id"
              reference="Order"
            >
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Queue Number" source="queueNumber" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles Queues Employee Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Queues User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Queue" target="user_id" label="Queues">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Completed" source="completed" />
            <TextField label="Completed At" source="completedAt" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Estimated Wait Time" source="estimatedWaitTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Orders Queues Order Id Toorders"
              source="order.id"
              reference="Order"
            >
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Queue Number" source="queueNumber" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles Queues Employee Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Queues User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SalonAccount"
          target="user_id"
          label="SalonAccounts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Balance" source="balance" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Number Field" source="numberField" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SalonRatingLike"
          target="user_id"
          label="SalonRatingLikes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Review" source="review" />
            <ReferenceField
              label="Salon Ratings"
              source="salonrating.id"
              reference="SalonRating"
            >
              <TextField source={SALONRATING_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Salon Rating Likes User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Salon Rating Likes Voter Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SalonRatingLike"
          target="voter_id"
          label="SalonRatingLikes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Review" source="review" />
            <ReferenceField
              label="Salon Ratings"
              source="salonrating.id"
              reference="SalonRating"
            >
              <TextField source={SALONRATING_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Salon Rating Likes User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Salon Rating Likes Voter Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SalonRating"
          target="user_id"
          label="SalonRatings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Rating" source="rating" />
            <TextField label="Review" source="review" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Salon Ratings User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Salon Ratings Voter Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SalonRating"
          target="voter_id"
          label="SalonRatings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Rating" source="rating" />
            <TextField label="Review" source="review" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Salon Ratings User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Salon Ratings Voter Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Salon"
          target="salon_admin_id"
          label="Salons"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Active" source="active" />
            <TextField label="Address" source="address" />
            <TextField label="Barbers" source="barbers" />
            <TextField label="Categories" source="categories" />
            <TextField label="Close Time" source="closeTime" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="Images" source="images" />
            <TextField label="Img" source="img" />
            <TextField label="Lat Lng" source="latLng" />
            <TextField label="Location" source="location" />
            <TextField label="Logo" source="logo" />
            <TextField label="Name" source="name" />
            <BooleanField label="Open" source="open" />
            <TextField label="Open Time" source="openTime" />
            <TextField label="Phone" source="phone" />
            <TextField label="Timezone" source="timezone" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles Salons Salon Admin Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Website" source="website" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Schedule"
          target="barber_id"
          label="Schedules"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Appointment Date" source="appointmentDate" />
            <TextField label="Appointment Time" source="appointmentTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="User Profiles Schedule Barber Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Schedule User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Schedule"
          target="user_id"
          label="Schedules"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Appointment Date" source="appointmentDate" />
            <TextField label="Appointment Time" source="appointmentTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="User Profiles Schedule Barber Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles Schedule User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TimeSlot"
          target="employee_id"
          label="TimeSlots"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="End Time" source="endTime" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Available" source="isAvailable" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Slot Date" source="slotDate" />
            <TextField label="Slot Time" source="slotTime" />
            <TextField label="Start Time" source="startTime" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserAccount"
          target="user_id"
          label="UserAccounts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Balance" source="balance" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Number Field" source="numberField" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserAddress"
          target="user_id"
          label="UserAddresses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Lat" source="lat" />
            <TextField label="Lng" source="lng" />
            <TextField label="Name" source="name" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserBankCard"
          target="user_id"
          label="UserBankCards"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Cvv" source="cvv" />
            <TextField label="Exp Date" source="expDate" />
            <BooleanField label="Favorite" source="favorite" />
            <TextField label="ID" source="id" />
            <BooleanField label="Main" source="main" />
            <TextField label="Name" source="name" />
            <TextField label="Number Field" source="numberField" />
            <TextField label="Token" source="token" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserFavoriteMaster"
          target="master_id"
          label="UserFavoriteMasters"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Created At" source="createdAt" />
            <BooleanField label="Favorite" source="favorite" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="User Profiles User Favorite Masters Master Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles User Favorite Masters User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserFavoriteMaster"
          target="user_id"
          label="UserFavoriteMasters"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Created At" source="createdAt" />
            <BooleanField label="Favorite" source="favorite" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="User Profiles User Favorite Masters Master Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles User Favorite Masters User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserFavoriteSalon"
          target="user_id"
          label="UserFavoriteSalons"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Created At" source="createdAt" />
            <BooleanField label="Favorite" source="favorite" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Salons" source="salon.id" reference="Salon">
              <TextField source={SALON_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserRating"
          target="owner"
          label="UserRatings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
            <TextField label="Review" source="review" />
            <ReferenceField
              label="User Profiles User Ratings Owner Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles User Ratings User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserRating"
          target="user_id"
          label="UserRatings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
            <TextField label="Review" source="review" />
            <ReferenceField
              label="User Profiles User Ratings Owner Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Profiles User Ratings User Id Touser Profiles"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
