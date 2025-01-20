import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalonServiceCategoryResolverBase } from "./base/salonServiceCategory.resolver.base";
import { SalonServiceCategory } from "./base/SalonServiceCategory";
import { SalonServiceCategoryService } from "./salonServiceCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalonServiceCategory)
export class SalonServiceCategoryResolver extends SalonServiceCategoryResolverBase {
  constructor(
    protected readonly service: SalonServiceCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
