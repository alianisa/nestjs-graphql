import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  action?: SortOrder;
  actionTime?: SortOrder;
  clockin?: SortOrder;
  clockout?: SortOrder;
  completed?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  salon_id?: SortOrder;
  updatedAt?: SortOrder;
  employee_id?: SortOrder;
};
