import { SortOrder } from "../../util/SortOrder";

export type EmployeeTaskOrderByInput = {
  actualDuration?: SortOrder;
  actualStartTime?: SortOrder;
  appointment_id?: SortOrder;
  completedAt?: SortOrder;
  createdAt?: SortOrder;
  estimatedDuration?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  order_type?: SortOrder;
  order_id?: SortOrder;
  queue_id?: SortOrder;
  salon_id?: SortOrder;
  scheduledStartTime?: SortOrder;
  task_status?: SortOrder;
  updatedAt?: SortOrder;
  employee_id?: SortOrder;
};
