import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeTaskListRelationFilter } from "../employeeTask/EmployeeTaskListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type QueueWhereInput = {
  completed?: BooleanNullableFilter;
  completedAt?: DateTimeNullableFilter;
  createdAt?: DateTimeNullableFilter;
  employeeTasks?: EmployeeTaskListRelationFilter;
  estimatedWaitTime?: IntNullableFilter;
  id?: StringFilter;
  ordersOrdersQueueIdToqueues?: OrderListRelationFilter;
  ordersQueuesOrderIdToorders?: OrderWhereUniqueInput;
  queueNumber?: IntNullableFilter;
  salons?: SalonWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  userProfilesQueuesEmployeeIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesQueuesUserIdTouserProfiles?: UserProfileWhereUniqueInput;
};
