import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeDailyStatService } from "./employeeDailyStat.service";
import { EmployeeDailyStatGrpcControllerBase } from "./base/employeeDailyStat.grpc.controller.base";

@swagger.ApiTags("employeeDailyStats")
@common.Controller("employeeDailyStats")
export class EmployeeDailyStatGrpcController extends EmployeeDailyStatGrpcControllerBase {
  constructor(protected readonly service: EmployeeDailyStatService) {
    super(service);
  }
}
