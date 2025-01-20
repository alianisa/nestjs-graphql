import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeDailyStatResolverBase } from "./base/employeeDailyStat.resolver.base";
import { EmployeeDailyStat } from "./base/EmployeeDailyStat";
import { EmployeeDailyStatService } from "./employeeDailyStat.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeDailyStat)
export class EmployeeDailyStatResolver extends EmployeeDailyStatResolverBase {
  constructor(
    protected readonly service: EmployeeDailyStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
