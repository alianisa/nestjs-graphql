import { Module } from "@nestjs/common";
import { EmployeeWorkScheduleModuleBase } from "./base/employeeWorkSchedule.module.base";
import { EmployeeWorkScheduleService } from "./employeeWorkSchedule.service";
import { EmployeeWorkScheduleController } from "./employeeWorkSchedule.controller";
import { EmployeeWorkScheduleGrpcController } from "./employeeWorkSchedule.grpc.controller";
import { EmployeeWorkScheduleResolver } from "./employeeWorkSchedule.resolver";

@Module({
  imports: [EmployeeWorkScheduleModuleBase],
  controllers: [
    EmployeeWorkScheduleController,
    EmployeeWorkScheduleGrpcController,
  ],
  providers: [EmployeeWorkScheduleService, EmployeeWorkScheduleResolver],
  exports: [EmployeeWorkScheduleService],
})
export class EmployeeWorkScheduleModule {}
