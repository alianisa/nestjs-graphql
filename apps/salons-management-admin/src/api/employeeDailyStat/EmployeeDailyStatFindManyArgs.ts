import { EmployeeDailyStatWhereInput } from "./EmployeeDailyStatWhereInput";
import { EmployeeDailyStatOrderByInput } from "./EmployeeDailyStatOrderByInput";

export type EmployeeDailyStatFindManyArgs = {
  where?: EmployeeDailyStatWhereInput;
  orderBy?: Array<EmployeeDailyStatOrderByInput>;
  skip?: number;
  take?: number;
};
