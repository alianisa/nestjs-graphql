import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeTaskService } from "./employeeTask.service";
import { EmployeeTaskGrpcControllerBase } from "./base/employeeTask.grpc.controller.base";

@swagger.ApiTags("employeeTasks")
@common.Controller("employeeTasks")
export class EmployeeTaskGrpcController extends EmployeeTaskGrpcControllerBase {
  constructor(protected readonly service: EmployeeTaskService) {
    super(service);
  }
}
