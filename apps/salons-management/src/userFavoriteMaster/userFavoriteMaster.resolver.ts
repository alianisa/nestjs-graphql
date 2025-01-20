import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserFavoriteMasterResolverBase } from "./base/userFavoriteMaster.resolver.base";
import { UserFavoriteMaster } from "./base/UserFavoriteMaster";
import { UserFavoriteMasterService } from "./userFavoriteMaster.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserFavoriteMaster)
export class UserFavoriteMasterResolver extends UserFavoriteMasterResolverBase {
  constructor(
    protected readonly service: UserFavoriteMasterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
