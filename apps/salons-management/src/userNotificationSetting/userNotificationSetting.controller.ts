import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserNotificationSettingService } from "./userNotificationSetting.service";
import { UserNotificationSettingControllerBase } from "./base/userNotificationSetting.controller.base";

@swagger.ApiTags("userNotificationSettings")
@common.Controller("userNotificationSettings")
export class UserNotificationSettingController extends UserNotificationSettingControllerBase {
  constructor(
    protected readonly service: UserNotificationSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
