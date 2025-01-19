import * as graphql from "@nestjs/graphql";
import { UserNotificationSettingResolverBase } from "./base/userNotificationSetting.resolver.base";
import { UserNotificationSetting } from "./base/UserNotificationSetting";
import { UserNotificationSettingService } from "./userNotificationSetting.service";

@graphql.Resolver(() => UserNotificationSetting)
export class UserNotificationSettingResolver extends UserNotificationSettingResolverBase {
  constructor(protected readonly service: UserNotificationSettingService) {
    super(service);
  }
}
