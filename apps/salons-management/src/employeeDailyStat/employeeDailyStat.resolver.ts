import * as graphql from "@nestjs/graphql";
import { EmployeeDailyStatResolverBase } from "./base/employeeDailyStat.resolver.base";
import { EmployeeDailyStat } from "./base/EmployeeDailyStat";
import { EmployeeDailyStatService } from "./employeeDailyStat.service";

@graphql.Resolver(() => EmployeeDailyStat)
export class EmployeeDailyStatResolver extends EmployeeDailyStatResolverBase {
  constructor(protected readonly service: EmployeeDailyStatService) {
    super(service);
  }
}
