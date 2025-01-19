import { Module } from "@nestjs/common";
import { UserActivityModuleBase } from "./base/userActivity.module.base";
import { UserActivityService } from "./userActivity.service";
import { UserActivityController } from "./userActivity.controller";
import { UserActivityGrpcController } from "./userActivity.grpc.controller";
import { UserActivityResolver } from "./userActivity.resolver";

@Module({
  imports: [UserActivityModuleBase],
  controllers: [UserActivityController, UserActivityGrpcController],
  providers: [UserActivityService, UserActivityResolver],
  exports: [UserActivityService],
})
export class UserActivityModule {}
