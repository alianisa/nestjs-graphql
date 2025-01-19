import * as graphql from "@nestjs/graphql";
import { UserFavoriteSalonResolverBase } from "./base/userFavoriteSalon.resolver.base";
import { UserFavoriteSalon } from "./base/UserFavoriteSalon";
import { UserFavoriteSalonService } from "./userFavoriteSalon.service";

@graphql.Resolver(() => UserFavoriteSalon)
export class UserFavoriteSalonResolver extends UserFavoriteSalonResolverBase {
  constructor(protected readonly service: UserFavoriteSalonService) {
    super(service);
  }
}
