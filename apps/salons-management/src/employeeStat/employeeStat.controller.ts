import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeStatService } from "./employeeStat.service";
import { EmployeeStatControllerBase } from "./base/employeeStat.controller.base";

@swagger.ApiTags("employeeStats")
@common.Controller("employeeStats")
export class EmployeeStatController extends EmployeeStatControllerBase {
  constructor(
    protected readonly service: EmployeeStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
