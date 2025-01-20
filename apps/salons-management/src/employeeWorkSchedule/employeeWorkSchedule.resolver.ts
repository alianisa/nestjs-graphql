import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeWorkScheduleResolverBase } from "./base/employeeWorkSchedule.resolver.base";
import { EmployeeWorkSchedule } from "./base/EmployeeWorkSchedule";
import { EmployeeWorkScheduleService } from "./employeeWorkSchedule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeWorkSchedule)
export class EmployeeWorkScheduleResolver extends EmployeeWorkScheduleResolverBase {
  constructor(
    protected readonly service: EmployeeWorkScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
