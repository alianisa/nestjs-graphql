import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeTaskService } from "./employeeTask.service";
import { EmployeeTaskControllerBase } from "./base/employeeTask.controller.base";

@swagger.ApiTags("employeeTasks")
@common.Controller("employeeTasks")
export class EmployeeTaskController extends EmployeeTaskControllerBase {
  constructor(
    protected readonly service: EmployeeTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
