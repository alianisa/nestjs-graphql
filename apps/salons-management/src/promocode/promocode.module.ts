import { Module } from "@nestjs/common";
import { PromocodeModuleBase } from "./base/promocode.module.base";
import { PromocodeService } from "./promocode.service";
import { PromocodeController } from "./promocode.controller";
import { PromocodeGrpcController } from "./promocode.grpc.controller";
import { PromocodeResolver } from "./promocode.resolver";

@Module({
  imports: [PromocodeModuleBase],
  controllers: [PromocodeController, PromocodeGrpcController],
  providers: [PromocodeService, PromocodeResolver],
  exports: [PromocodeService],
})
export class PromocodeModule {}
