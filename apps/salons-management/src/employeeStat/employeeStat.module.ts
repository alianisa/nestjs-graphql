import { Module } from "@nestjs/common";
import { EmployeeStatModuleBase } from "./base/employeeStat.module.base";
import { EmployeeStatService } from "./employeeStat.service";
import { EmployeeStatController } from "./employeeStat.controller";
import { EmployeeStatGrpcController } from "./employeeStat.grpc.controller";
import { EmployeeStatResolver } from "./employeeStat.resolver";

@Module({
  imports: [EmployeeStatModuleBase],
  controllers: [EmployeeStatController, EmployeeStatGrpcController],
  providers: [EmployeeStatService, EmployeeStatResolver],
  exports: [EmployeeStatService],
})
export class EmployeeStatModule {}
