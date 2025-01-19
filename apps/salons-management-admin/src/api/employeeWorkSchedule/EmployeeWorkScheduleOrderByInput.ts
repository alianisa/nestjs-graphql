import { SortOrder } from "../../util/SortOrder";

export type EmployeeWorkScheduleOrderByInput = {
  breakEnd?: SortOrder;
  breakStart?: SortOrder;
  day_of_week?: SortOrder;
  id?: SortOrder;
  salon_id?: SortOrder;
  shiftEnd?: SortOrder;
  shiftStart?: SortOrder;
  employee_id?: SortOrder;
};
