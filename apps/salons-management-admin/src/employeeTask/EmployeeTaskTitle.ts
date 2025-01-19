import { EmployeeTask as TEmployeeTask } from "../api/employeeTask/EmployeeTask";

export const EMPLOYEETASK_TITLE_FIELD = "notes";

export const EmployeeTaskTitle = (record: TEmployeeTask): string => {
  return record.notes?.toString() || String(record.id);
};
