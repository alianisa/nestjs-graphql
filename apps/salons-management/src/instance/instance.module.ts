import { Module } from "@nestjs/common";
import { InstanceModuleBase } from "./base/instance.module.base";
import { InstanceService } from "./instance.service";
import { InstanceController } from "./instance.controller";
import { InstanceGrpcController } from "./instance.grpc.controller";
import { InstanceResolver } from "./instance.resolver";

@Module({
  imports: [InstanceModuleBase],
  controllers: [InstanceController, InstanceGrpcController],
  providers: [InstanceService, InstanceResolver],
  exports: [InstanceService],
})
export class InstanceModule {}
