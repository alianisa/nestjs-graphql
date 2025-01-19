import * as graphql from "@nestjs/graphql";
import { SalonRatingLikeResolverBase } from "./base/salonRatingLike.resolver.base";
import { SalonRatingLike } from "./base/SalonRatingLike";
import { SalonRatingLikeService } from "./salonRatingLike.service";

@graphql.Resolver(() => SalonRatingLike)
export class SalonRatingLikeResolver extends SalonRatingLikeResolverBase {
  constructor(protected readonly service: SalonRatingLikeService) {
    super(service);
  }
}
