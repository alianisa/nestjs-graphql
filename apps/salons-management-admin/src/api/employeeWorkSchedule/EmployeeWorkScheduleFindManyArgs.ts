import { EmployeeWorkScheduleWhereInput } from "./EmployeeWorkScheduleWhereInput";
import { EmployeeWorkScheduleOrderByInput } from "./EmployeeWorkScheduleOrderByInput";

export type EmployeeWorkScheduleFindManyArgs = {
  where?: EmployeeWorkScheduleWhereInput;
  orderBy?: Array<EmployeeWorkScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
