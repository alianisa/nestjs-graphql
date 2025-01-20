import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeStatService } from "./employeeStat.service";
import { EmployeeStatGrpcControllerBase } from "./base/employeeStat.grpc.controller.base";

@swagger.ApiTags("employeeStats")
@common.Controller("employeeStats")
export class EmployeeStatGrpcController extends EmployeeStatGrpcControllerBase {
  constructor(protected readonly service: EmployeeStatService) {
    super(service);
  }
}
