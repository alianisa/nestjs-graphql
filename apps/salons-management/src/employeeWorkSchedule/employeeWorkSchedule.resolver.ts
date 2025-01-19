import * as graphql from "@nestjs/graphql";
import { EmployeeWorkScheduleResolverBase } from "./base/employeeWorkSchedule.resolver.base";
import { EmployeeWorkSchedule } from "./base/EmployeeWorkSchedule";
import { EmployeeWorkScheduleService } from "./employeeWorkSchedule.service";

@graphql.Resolver(() => EmployeeWorkSchedule)
export class EmployeeWorkScheduleResolver extends EmployeeWorkScheduleResolverBase {
  constructor(protected readonly service: EmployeeWorkScheduleService) {
    super(service);
  }
}
