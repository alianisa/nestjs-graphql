import { Module } from "@nestjs/common";
import { SsoProviderModuleBase } from "./base/ssoProvider.module.base";
import { SsoProviderService } from "./ssoProvider.service";
import { SsoProviderController } from "./ssoProvider.controller";
import { SsoProviderGrpcController } from "./ssoProvider.grpc.controller";
import { SsoProviderResolver } from "./ssoProvider.resolver";

@Module({
  imports: [SsoProviderModuleBase],
  controllers: [SsoProviderController, SsoProviderGrpcController],
  providers: [SsoProviderService, SsoProviderResolver],
  exports: [SsoProviderService],
})
export class SsoProviderModule {}
