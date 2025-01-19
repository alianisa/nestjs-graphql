import { Module } from "@nestjs/common";
import { QueueModuleBase } from "./base/queue.module.base";
import { QueueService } from "./queue.service";
import { QueueController } from "./queue.controller";
import { QueueGrpcController } from "./queue.grpc.controller";
import { QueueResolver } from "./queue.resolver";

@Module({
  imports: [QueueModuleBase],
  controllers: [QueueController, QueueGrpcController],
  providers: [QueueService, QueueResolver],
  exports: [QueueService],
})
export class QueueModule {}
