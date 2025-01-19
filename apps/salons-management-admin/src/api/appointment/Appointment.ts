import { EmployeeTask } from "../employeeTask/EmployeeTask";
import { Order } from "../order/Order";
import { TimeSlot } from "../timeSlot/TimeSlot";
import { UserProfile } from "../userProfile/UserProfile";

export type Appointment = {
  appointmentDate: Date;
  employeeId: string;
  employeeTasks?: Array<EmployeeTask>;
  id: string;
  ordersAppointmentsOrderIdToorders?: Order | null;
  ordersOrdersAppointmentIdToappointments?: Array<Order>;
  timeSlots?: TimeSlot;
  userProfiles?: UserProfile;
};
