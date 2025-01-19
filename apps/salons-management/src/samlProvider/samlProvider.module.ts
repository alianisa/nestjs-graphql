import { Module } from "@nestjs/common";
import { SamlProviderModuleBase } from "./base/samlProvider.module.base";
import { SamlProviderService } from "./samlProvider.service";
import { SamlProviderController } from "./samlProvider.controller";
import { SamlProviderGrpcController } from "./samlProvider.grpc.controller";
import { SamlProviderResolver } from "./samlProvider.resolver";

@Module({
  imports: [SamlProviderModuleBase],
  controllers: [SamlProviderController, SamlProviderGrpcController],
  providers: [SamlProviderService, SamlProviderResolver],
  exports: [SamlProviderService],
})
export class SamlProviderModule {}
