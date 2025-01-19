import { Module } from "@nestjs/common";
import { NotificationModuleBase } from "./base/notification.module.base";
import { NotificationService } from "./notification.service";
import { NotificationController } from "./notification.controller";
import { NotificationGrpcController } from "./notification.grpc.controller";
import { NotificationResolver } from "./notification.resolver";

@Module({
  imports: [NotificationModuleBase],
  controllers: [NotificationController, NotificationGrpcController],
  providers: [NotificationService, NotificationResolver],
  exports: [NotificationService],
})
export class NotificationModule {}
