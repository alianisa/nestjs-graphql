import { EmployeeTaskUpdateManyWithoutAppointmentsInput } from "./EmployeeTaskUpdateManyWithoutAppointmentsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderUpdateManyWithoutAppointmentsInput } from "./OrderUpdateManyWithoutAppointmentsInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date;
  employeeId?: string;
  employeeTasks?: EmployeeTaskUpdateManyWithoutAppointmentsInput;
  ordersAppointmentsOrderIdToorders?: OrderWhereUniqueInput | null;
  ordersOrdersAppointmentIdToappointments?: OrderUpdateManyWithoutAppointmentsInput;
  timeSlots?: TimeSlotWhereUniqueInput;
  userProfiles?: UserProfileWhereUniqueInput;
};
