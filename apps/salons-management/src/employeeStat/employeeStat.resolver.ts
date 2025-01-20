import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeStatResolverBase } from "./base/employeeStat.resolver.base";
import { EmployeeStat } from "./base/EmployeeStat";
import { EmployeeStatService } from "./employeeStat.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeStat)
export class EmployeeStatResolver extends EmployeeStatResolverBase {
  constructor(
    protected readonly service: EmployeeStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
