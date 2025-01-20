import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MobilePaymentProviderModuleBase } from "./base/mobilePaymentProvider.module.base";
import { MobilePaymentProviderService } from "./mobilePaymentProvider.service";
import { MobilePaymentProviderController } from "./mobilePaymentProvider.controller";
import { MobilePaymentProviderGrpcController } from "./mobilePaymentProvider.grpc.controller";
import { MobilePaymentProviderResolver } from "./mobilePaymentProvider.resolver";

@Module({
  imports: [MobilePaymentProviderModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    MobilePaymentProviderController,
    MobilePaymentProviderGrpcController,
  ],
  providers: [MobilePaymentProviderService, MobilePaymentProviderResolver],
  exports: [MobilePaymentProviderService],
})
export class MobilePaymentProviderModule {}
