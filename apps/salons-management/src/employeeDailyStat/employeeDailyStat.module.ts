import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeDailyStatModuleBase } from "./base/employeeDailyStat.module.base";
import { EmployeeDailyStatService } from "./employeeDailyStat.service";
import { EmployeeDailyStatController } from "./employeeDailyStat.controller";
import { EmployeeDailyStatGrpcController } from "./employeeDailyStat.grpc.controller";
import { EmployeeDailyStatResolver } from "./employeeDailyStat.resolver";

@Module({
  imports: [EmployeeDailyStatModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeDailyStatController, EmployeeDailyStatGrpcController],
  providers: [EmployeeDailyStatService, EmployeeDailyStatResolver],
  exports: [EmployeeDailyStatService],
})
export class EmployeeDailyStatModule {}
