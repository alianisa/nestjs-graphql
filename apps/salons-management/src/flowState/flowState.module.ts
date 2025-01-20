import { Module } from "@nestjs/common";
import { FlowStateModuleBase } from "./base/flowState.module.base";
import { FlowStateService } from "./flowState.service";
import { FlowStateController } from "./flowState.controller";
import { FlowStateGrpcController } from "./flowState.grpc.controller";
import { FlowStateResolver } from "./flowState.resolver";

@Module({
  imports: [FlowStateModuleBase],
  controllers: [FlowStateController, FlowStateGrpcController],
  providers: [FlowStateService, FlowStateResolver],
  exports: [FlowStateService],
})
export class FlowStateModule {}
