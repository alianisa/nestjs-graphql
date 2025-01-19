import { EmployeeTaskWhereInput } from "./EmployeeTaskWhereInput";
import { EmployeeTaskOrderByInput } from "./EmployeeTaskOrderByInput";

export type EmployeeTaskFindManyArgs = {
  where?: EmployeeTaskWhereInput;
  orderBy?: Array<EmployeeTaskOrderByInput>;
  skip?: number;
  take?: number;
};
