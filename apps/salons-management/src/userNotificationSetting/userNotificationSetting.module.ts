import { Module } from "@nestjs/common";
import { UserNotificationSettingModuleBase } from "./base/userNotificationSetting.module.base";
import { UserNotificationSettingService } from "./userNotificationSetting.service";
import { UserNotificationSettingController } from "./userNotificationSetting.controller";
import { UserNotificationSettingGrpcController } from "./userNotificationSetting.grpc.controller";
import { UserNotificationSettingResolver } from "./userNotificationSetting.resolver";

@Module({
  imports: [UserNotificationSettingModuleBase],
  controllers: [
    UserNotificationSettingController,
    UserNotificationSettingGrpcController,
  ],
  providers: [UserNotificationSettingService, UserNotificationSettingResolver],
  exports: [UserNotificationSettingService],
})
export class UserNotificationSettingModule {}
