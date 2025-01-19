import { Module } from "@nestjs/common";
import { OrderImageModuleBase } from "./base/orderImage.module.base";
import { OrderImageService } from "./orderImage.service";
import { OrderImageController } from "./orderImage.controller";
import { OrderImageGrpcController } from "./orderImage.grpc.controller";
import { OrderImageResolver } from "./orderImage.resolver";

@Module({
  imports: [OrderImageModuleBase],
  controllers: [OrderImageController, OrderImageGrpcController],
  providers: [OrderImageService, OrderImageResolver],
  exports: [OrderImageService],
})
export class OrderImageModule {}
