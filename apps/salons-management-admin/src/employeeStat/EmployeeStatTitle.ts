import { EmployeeStat as TEmployeeStat } from "../api/employeeStat/EmployeeStat";

export const EMPLOYEESTAT_TITLE_FIELD = "efficiencyTrend";

export const EmployeeStatTitle = (record: TEmployeeStat): string => {
  return record.efficiencyTrend?.toString() || String(record.id);
};
