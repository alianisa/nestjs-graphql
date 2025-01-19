import { Module } from "@nestjs/common";
import { SamlRelayStateModuleBase } from "./base/samlRelayState.module.base";
import { SamlRelayStateService } from "./samlRelayState.service";
import { SamlRelayStateController } from "./samlRelayState.controller";
import { SamlRelayStateGrpcController } from "./samlRelayState.grpc.controller";
import { SamlRelayStateResolver } from "./samlRelayState.resolver";

@Module({
  imports: [SamlRelayStateModuleBase],
  controllers: [SamlRelayStateController, SamlRelayStateGrpcController],
  providers: [SamlRelayStateService, SamlRelayStateResolver],
  exports: [SamlRelayStateService],
})
export class SamlRelayStateModule {}
