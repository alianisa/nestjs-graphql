import * as graphql from "@nestjs/graphql";
import { UserFavoriteMasterResolverBase } from "./base/userFavoriteMaster.resolver.base";
import { UserFavoriteMaster } from "./base/UserFavoriteMaster";
import { UserFavoriteMasterService } from "./userFavoriteMaster.service";

@graphql.Resolver(() => UserFavoriteMaster)
export class UserFavoriteMasterResolver extends UserFavoriteMasterResolverBase {
  constructor(protected readonly service: UserFavoriteMasterService) {
    super(service);
  }
}
