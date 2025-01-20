import { EmployeeDailyStat as TEmployeeDailyStat } from "../api/employeeDailyStat/EmployeeDailyStat";

export const EMPLOYEEDAILYSTAT_TITLE_FIELD = "avgServiceTimeTrend";

export const EmployeeDailyStatTitle = (record: TEmployeeDailyStat): string => {
  return record.avgServiceTimeTrend?.toString() || String(record.id);
};
