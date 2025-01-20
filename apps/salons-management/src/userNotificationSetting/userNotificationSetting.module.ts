import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserNotificationSettingModuleBase } from "./base/userNotificationSetting.module.base";
import { UserNotificationSettingService } from "./userNotificationSetting.service";
import { UserNotificationSettingController } from "./userNotificationSetting.controller";
import { UserNotificationSettingGrpcController } from "./userNotificationSetting.grpc.controller";
import { UserNotificationSettingResolver } from "./userNotificationSetting.resolver";

@Module({
  imports: [UserNotificationSettingModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    UserNotificationSettingController,
    UserNotificationSettingGrpcController,
  ],
  providers: [UserNotificationSettingService, UserNotificationSettingResolver],
  exports: [UserNotificationSettingService],
})
export class UserNotificationSettingModule {}
