import { Module } from "@nestjs/common";
import { SalonServiceModuleBase } from "./base/salonService.module.base";
import { SalonServiceService } from "./salonService.service";
import { SalonServiceController } from "./salonService.controller";
import { SalonServiceGrpcController } from "./salonService.grpc.controller";
import { SalonServiceResolver } from "./salonService.resolver";

@Module({
  imports: [SalonServiceModuleBase],
  controllers: [SalonServiceController, SalonServiceGrpcController],
  providers: [SalonServiceService, SalonServiceResolver],
  exports: [SalonServiceService],
})
export class SalonServiceModule {}
