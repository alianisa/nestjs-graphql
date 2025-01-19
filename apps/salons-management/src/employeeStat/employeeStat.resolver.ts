import * as graphql from "@nestjs/graphql";
import { EmployeeStatResolverBase } from "./base/employeeStat.resolver.base";
import { EmployeeStat } from "./base/EmployeeStat";
import { EmployeeStatService } from "./employeeStat.service";

@graphql.Resolver(() => EmployeeStat)
export class EmployeeStatResolver extends EmployeeStatResolverBase {
  constructor(protected readonly service: EmployeeStatService) {
    super(service);
  }
}
