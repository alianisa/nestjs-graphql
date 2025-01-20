import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserNotificationSettingResolverBase } from "./base/userNotificationSetting.resolver.base";
import { UserNotificationSetting } from "./base/UserNotificationSetting";
import { UserNotificationSettingService } from "./userNotificationSetting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserNotificationSetting)
export class UserNotificationSettingResolver extends UserNotificationSettingResolverBase {
  constructor(
    protected readonly service: UserNotificationSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
