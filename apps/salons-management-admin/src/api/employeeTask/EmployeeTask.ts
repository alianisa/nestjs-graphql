import { Appointment } from "../appointment/Appointment";
import { Order } from "../order/Order";
import { Queue } from "../queue/Queue";
import { Salon } from "../salon/Salon";
import { UserProfile } from "../userProfile/UserProfile";

export type EmployeeTask = {
  actualDuration: number | null;
  actualStartTime: Date | null;
  appointments?: Appointment | null;
  completedAt: Date | null;
  createdAt: Date | null;
  estimatedDuration: number;
  id: string;
  notes: string | null;
  order_type?: "appointment" | "queue";
  orders?: Order;
  queues?: Queue | null;
  salons?: Salon;
  scheduledStartTime: Date;
  task_status?:
    | "NOT_STARTED"
    | "WITH_MASTER"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
  updatedAt: Date | null;
  userProfiles?: UserProfile;
};
