import { EmployeeWorkSchedule as TEmployeeWorkSchedule } from "../api/employeeWorkSchedule/EmployeeWorkSchedule";

export const EMPLOYEEWORKSCHEDULE_TITLE_FIELD = "id";

export const EmployeeWorkScheduleTitle = (
  record: TEmployeeWorkSchedule
): string => {
  return record.id?.toString() || String(record.id);
};
