import { Module } from "@nestjs/common";
import { SalonModuleBase } from "./base/salon.module.base";
import { SalonService } from "./salon.service";
import { SalonController } from "./salon.controller";
import { SalonGrpcController } from "./salon.grpc.controller";
import { SalonResolver } from "./salon.resolver";

@Module({
  imports: [SalonModuleBase],
  controllers: [SalonController, SalonGrpcController],
  providers: [SalonService, SalonResolver],
  exports: [SalonService],
})
export class SalonModule {}
