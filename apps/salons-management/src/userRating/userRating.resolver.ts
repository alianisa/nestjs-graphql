import * as graphql from "@nestjs/graphql";
import { UserRatingResolverBase } from "./base/userRating.resolver.base";
import { UserRating } from "./base/UserRating";
import { UserRatingService } from "./userRating.service";

@graphql.Resolver(() => UserRating)
export class UserRatingResolver extends UserRatingResolverBase {
  constructor(protected readonly service: UserRatingService) {
    super(service);
  }
}
