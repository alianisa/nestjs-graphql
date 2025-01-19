import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type EmployeeTaskWhereInput = {
  actualDuration?: IntNullableFilter;
  actualStartTime?: DateTimeNullableFilter;
  appointments?: AppointmentWhereUniqueInput;
  completedAt?: DateTimeNullableFilter;
  createdAt?: DateTimeNullableFilter;
  estimatedDuration?: IntFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  order_type?: "appointment" | "queue";
  orders?: OrderWhereUniqueInput;
  queues?: QueueWhereUniqueInput;
  salons?: SalonWhereUniqueInput;
  scheduledStartTime?: DateTimeFilter;
  task_status?:
    | "NOT_STARTED"
    | "WITH_MASTER"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
  updatedAt?: DateTimeNullableFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
