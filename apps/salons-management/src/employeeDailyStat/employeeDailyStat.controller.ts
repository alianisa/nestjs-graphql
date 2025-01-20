import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeDailyStatService } from "./employeeDailyStat.service";
import { EmployeeDailyStatControllerBase } from "./base/employeeDailyStat.controller.base";

@swagger.ApiTags("employeeDailyStats")
@common.Controller("employeeDailyStats")
export class EmployeeDailyStatController extends EmployeeDailyStatControllerBase {
  constructor(
    protected readonly service: EmployeeDailyStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
