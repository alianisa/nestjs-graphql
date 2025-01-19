import { Module } from "@nestjs/common";
import { EmployeeDailyStatModuleBase } from "./base/employeeDailyStat.module.base";
import { EmployeeDailyStatService } from "./employeeDailyStat.service";
import { EmployeeDailyStatController } from "./employeeDailyStat.controller";
import { EmployeeDailyStatGrpcController } from "./employeeDailyStat.grpc.controller";
import { EmployeeDailyStatResolver } from "./employeeDailyStat.resolver";

@Module({
  imports: [EmployeeDailyStatModuleBase],
  controllers: [EmployeeDailyStatController, EmployeeDailyStatGrpcController],
  providers: [EmployeeDailyStatService, EmployeeDailyStatResolver],
  exports: [EmployeeDailyStatService],
})
export class EmployeeDailyStatModule {}
