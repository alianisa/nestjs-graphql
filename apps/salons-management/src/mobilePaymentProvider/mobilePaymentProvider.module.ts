import { Module } from "@nestjs/common";
import { MobilePaymentProviderModuleBase } from "./base/mobilePaymentProvider.module.base";
import { MobilePaymentProviderService } from "./mobilePaymentProvider.service";
import { MobilePaymentProviderController } from "./mobilePaymentProvider.controller";
import { MobilePaymentProviderGrpcController } from "./mobilePaymentProvider.grpc.controller";
import { MobilePaymentProviderResolver } from "./mobilePaymentProvider.resolver";

@Module({
  imports: [MobilePaymentProviderModuleBase],
  controllers: [
    MobilePaymentProviderController,
    MobilePaymentProviderGrpcController,
  ],
  providers: [MobilePaymentProviderService, MobilePaymentProviderResolver],
  exports: [MobilePaymentProviderService],
})
export class MobilePaymentProviderModule {}
