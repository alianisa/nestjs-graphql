import { EmployeeTask } from "../employeeTask/EmployeeTask";
import { Order } from "../order/Order";
import { Salon } from "../salon/Salon";
import { UserProfile } from "../userProfile/UserProfile";

export type Queue = {
  completed: boolean | null;
  completedAt: Date | null;
  createdAt: Date | null;
  employeeTasks?: Array<EmployeeTask>;
  estimatedWaitTime: number | null;
  id: string;
  ordersOrdersQueueIdToqueues?: Array<Order>;
  ordersQueuesOrderIdToorders?: Order | null;
  queueNumber: number | null;
  salons?: Salon | null;
  updatedAt: Date | null;
  userProfilesQueuesEmployeeIdTouserProfiles?: UserProfile | null;
  userProfilesQueuesUserIdTouserProfiles?: UserProfile | null;
};
