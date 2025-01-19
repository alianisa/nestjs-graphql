import * as graphql from "@nestjs/graphql";
import { EmployeeTaskResolverBase } from "./base/employeeTask.resolver.base";
import { EmployeeTask } from "./base/EmployeeTask";
import { EmployeeTaskService } from "./employeeTask.service";

@graphql.Resolver(() => EmployeeTask)
export class EmployeeTaskResolver extends EmployeeTaskResolverBase {
  constructor(protected readonly service: EmployeeTaskService) {
    super(service);
  }
}
