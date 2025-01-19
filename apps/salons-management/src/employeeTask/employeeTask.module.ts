import { Module } from "@nestjs/common";
import { EmployeeTaskModuleBase } from "./base/employeeTask.module.base";
import { EmployeeTaskService } from "./employeeTask.service";
import { EmployeeTaskController } from "./employeeTask.controller";
import { EmployeeTaskGrpcController } from "./employeeTask.grpc.controller";
import { EmployeeTaskResolver } from "./employeeTask.resolver";

@Module({
  imports: [EmployeeTaskModuleBase],
  controllers: [EmployeeTaskController, EmployeeTaskGrpcController],
  providers: [EmployeeTaskService, EmployeeTaskResolver],
  exports: [EmployeeTaskService],
})
export class EmployeeTaskModule {}
