import { EmployeeTaskCreateNestedManyWithoutAppointmentsInput } from "./EmployeeTaskCreateNestedManyWithoutAppointmentsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderCreateNestedManyWithoutAppointmentsInput } from "./OrderCreateNestedManyWithoutAppointmentsInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentDate: Date;
  employeeId: string;
  employeeTasks?: EmployeeTaskCreateNestedManyWithoutAppointmentsInput;
  ordersAppointmentsOrderIdToorders?: OrderWhereUniqueInput | null;
  ordersOrdersAppointmentIdToappointments?: OrderCreateNestedManyWithoutAppointmentsInput;
  timeSlots: TimeSlotWhereUniqueInput;
  userProfiles: UserProfileWhereUniqueInput;
};
