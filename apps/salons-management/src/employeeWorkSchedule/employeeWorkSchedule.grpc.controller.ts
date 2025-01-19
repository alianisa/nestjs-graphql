import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeWorkScheduleService } from "./employeeWorkSchedule.service";
import { EmployeeWorkScheduleGrpcControllerBase } from "./base/employeeWorkSchedule.grpc.controller.base";

@swagger.ApiTags("employeeWorkSchedules")
@common.Controller("employeeWorkSchedules")
export class EmployeeWorkScheduleGrpcController extends EmployeeWorkScheduleGrpcControllerBase {
  constructor(protected readonly service: EmployeeWorkScheduleService) {
    super(service);
  }
}
