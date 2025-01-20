import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type EmployeeTaskUpdateInput = {
  actualDuration?: number | null;
  actualStartTime?: Date | null;
  appointments?: AppointmentWhereUniqueInput | null;
  completedAt?: Date | null;
  estimatedDuration?: number;
  notes?: string | null;
  order_type?: "appointment" | "queue";
  orders?: OrderWhereUniqueInput;
  queues?: QueueWhereUniqueInput | null;
  salons?: SalonWhereUniqueInput;
  scheduledStartTime?: Date;
  task_status?:
    | "NOT_STARTED"
    | "WITH_MASTER"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
  updatedAt?: Date | null;
  userProfiles?: UserProfileWhereUniqueInput;
};
