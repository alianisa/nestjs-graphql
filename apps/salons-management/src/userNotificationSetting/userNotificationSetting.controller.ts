import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserNotificationSettingService } from "./userNotificationSetting.service";
import { UserNotificationSettingControllerBase } from "./base/userNotificationSetting.controller.base";

@swagger.ApiTags("userNotificationSettings")
@common.Controller("userNotificationSettings")
export class UserNotificationSettingController extends UserNotificationSettingControllerBase {
  constructor(protected readonly service: UserNotificationSettingService) {
    super(service);
  }
}
