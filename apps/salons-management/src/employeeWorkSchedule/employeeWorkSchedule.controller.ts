import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeWorkScheduleService } from "./employeeWorkSchedule.service";
import { EmployeeWorkScheduleControllerBase } from "./base/employeeWorkSchedule.controller.base";

@swagger.ApiTags("employeeWorkSchedules")
@common.Controller("employeeWorkSchedules")
export class EmployeeWorkScheduleController extends EmployeeWorkScheduleControllerBase {
  constructor(protected readonly service: EmployeeWorkScheduleService) {
    super(service);
  }
}
