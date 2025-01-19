import * as graphql from "@nestjs/graphql";
import { SalonRatingResolverBase } from "./base/salonRating.resolver.base";
import { SalonRating } from "./base/SalonRating";
import { SalonRatingService } from "./salonRating.service";

@graphql.Resolver(() => SalonRating)
export class SalonRatingResolver extends SalonRatingResolverBase {
  constructor(protected readonly service: SalonRatingService) {
    super(service);
  }
}
