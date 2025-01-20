import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalonRatingLikeResolverBase } from "./base/salonRatingLike.resolver.base";
import { SalonRatingLike } from "./base/SalonRatingLike";
import { SalonRatingLikeService } from "./salonRatingLike.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalonRatingLike)
export class SalonRatingLikeResolver extends SalonRatingLikeResolverBase {
  constructor(
    protected readonly service: SalonRatingLikeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
