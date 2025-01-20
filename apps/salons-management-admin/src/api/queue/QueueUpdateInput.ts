import { EmployeeTaskUpdateManyWithoutQueuesInput } from "./EmployeeTaskUpdateManyWithoutQueuesInput";
import { OrderUpdateManyWithoutQueuesInput } from "./OrderUpdateManyWithoutQueuesInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type QueueUpdateInput = {
  completed?: boolean | null;
  completedAt?: Date | null;
  createdAt?: Date | null;
  employeeTasks?: EmployeeTaskUpdateManyWithoutQueuesInput;
  estimatedWaitTime?: number | null;
  ordersOrdersQueueIdToqueues?: OrderUpdateManyWithoutQueuesInput;
  ordersQueuesOrderIdToorders?: OrderWhereUniqueInput | null;
  queueNumber?: number | null;
  salons?: SalonWhereUniqueInput | null;
  updatedAt?: Date | null;
  userProfilesQueuesEmployeeIdTouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesQueuesUserIdTouserProfiles?: UserProfileWhereUniqueInput | null;
};
