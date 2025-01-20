import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeStatModuleBase } from "./base/employeeStat.module.base";
import { EmployeeStatService } from "./employeeStat.service";
import { EmployeeStatController } from "./employeeStat.controller";
import { EmployeeStatGrpcController } from "./employeeStat.grpc.controller";
import { EmployeeStatResolver } from "./employeeStat.resolver";

@Module({
  imports: [EmployeeStatModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeStatController, EmployeeStatGrpcController],
  providers: [EmployeeStatService, EmployeeStatResolver],
  exports: [EmployeeStatService],
})
export class EmployeeStatModule {}
