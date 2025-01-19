import { Module } from "@nestjs/common";
import { SalonstestModuleBase } from "./base/salonstest.module.base";
import { SalonstestService } from "./salonstest.service";
import { SalonstestController } from "./salonstest.controller";
import { SalonstestGrpcController } from "./salonstest.grpc.controller";
import { SalonstestResolver } from "./salonstest.resolver";

@Module({
  imports: [SalonstestModuleBase],
  controllers: [SalonstestController, SalonstestGrpcController],
  providers: [SalonstestService, SalonstestResolver],
  exports: [SalonstestService],
})
export class SalonstestModule {}
