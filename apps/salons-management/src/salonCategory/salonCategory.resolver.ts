import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalonCategoryResolverBase } from "./base/salonCategory.resolver.base";
import { SalonCategory } from "./base/SalonCategory";
import { SalonCategoryService } from "./salonCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalonCategory)
export class SalonCategoryResolver extends SalonCategoryResolverBase {
  constructor(
    protected readonly service: SalonCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
