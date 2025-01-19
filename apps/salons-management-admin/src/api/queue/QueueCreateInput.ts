import { EmployeeTaskCreateNestedManyWithoutQueuesInput } from "./EmployeeTaskCreateNestedManyWithoutQueuesInput";
import { OrderCreateNestedManyWithoutQueuesInput } from "./OrderCreateNestedManyWithoutQueuesInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type QueueCreateInput = {
  completed?: boolean | null;
  completedAt?: Date | null;
  createdAt?: Date | null;
  employeeTasks?: EmployeeTaskCreateNestedManyWithoutQueuesInput;
  estimatedWaitTime?: number | null;
  ordersOrdersQueueIdToqueues?: OrderCreateNestedManyWithoutQueuesInput;
  ordersQueuesOrderIdToorders?: OrderWhereUniqueInput | null;
  queueNumber?: number | null;
  salons?: SalonWhereUniqueInput | null;
  updatedAt?: Date | null;
  userProfilesQueuesEmployeeIdTouserProfiles?: UserProfileWhereUniqueInput | null;
  userProfilesQueuesUserIdTouserProfiles?: UserProfileWhereUniqueInput | null;
};
