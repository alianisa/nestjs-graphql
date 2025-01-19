import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { EmployeeTaskListRelationFilter } from "../employeeTask/EmployeeTaskListRelationFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeFilter;
  employeeId?: StringFilter;
  employeeTasks?: EmployeeTaskListRelationFilter;
  id?: StringFilter;
  ordersAppointmentsOrderIdToorders?: OrderWhereUniqueInput;
  ordersOrdersAppointmentIdToappointments?: OrderListRelationFilter;
  timeSlots?: TimeSlotWhereUniqueInput;
  userProfiles?: UserProfileWhereUniqueInput;
};
