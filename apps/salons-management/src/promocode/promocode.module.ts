import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PromocodeModuleBase } from "./base/promocode.module.base";
import { PromocodeService } from "./promocode.service";
import { PromocodeController } from "./promocode.controller";
import { PromocodeGrpcController } from "./promocode.grpc.controller";
import { PromocodeResolver } from "./promocode.resolver";

@Module({
  imports: [PromocodeModuleBase, forwardRef(() => AuthModule)],
  controllers: [PromocodeController, PromocodeGrpcController],
  providers: [PromocodeService, PromocodeResolver],
  exports: [PromocodeService],
})
export class PromocodeModule {}
