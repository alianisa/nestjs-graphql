import { EmployeeStatWhereInput } from "./EmployeeStatWhereInput";
import { EmployeeStatOrderByInput } from "./EmployeeStatOrderByInput";

export type EmployeeStatFindManyArgs = {
  where?: EmployeeStatWhereInput;
  orderBy?: Array<EmployeeStatOrderByInput>;
  skip?: number;
  take?: number;
};
