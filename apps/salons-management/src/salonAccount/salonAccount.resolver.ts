import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalonAccountResolverBase } from "./base/salonAccount.resolver.base";
import { SalonAccount } from "./base/SalonAccount";
import { SalonAccountService } from "./salonAccount.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalonAccount)
export class SalonAccountResolver extends SalonAccountResolverBase {
  constructor(
    protected readonly service: SalonAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
