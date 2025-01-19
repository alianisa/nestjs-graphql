import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserNotificationSettingService } from "./userNotificationSetting.service";
import { UserNotificationSettingGrpcControllerBase } from "./base/userNotificationSetting.grpc.controller.base";

@swagger.ApiTags("userNotificationSettings")
@common.Controller("userNotificationSettings")
export class UserNotificationSettingGrpcController extends UserNotificationSettingGrpcControllerBase {
  constructor(protected readonly service: UserNotificationSettingService) {
    super(service);
  }
}
