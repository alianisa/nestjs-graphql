import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderImageModuleBase } from "./base/orderImage.module.base";
import { OrderImageService } from "./orderImage.service";
import { OrderImageController } from "./orderImage.controller";
import { OrderImageGrpcController } from "./orderImage.grpc.controller";
import { OrderImageResolver } from "./orderImage.resolver";

@Module({
  imports: [OrderImageModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderImageController, OrderImageGrpcController],
  providers: [OrderImageService, OrderImageResolver],
  exports: [OrderImageService],
})
export class OrderImageModule {}
