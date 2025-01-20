import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LoyaltyProgramResolverBase } from "./base/loyaltyProgram.resolver.base";
import { LoyaltyProgram } from "./base/LoyaltyProgram";
import { LoyaltyProgramService } from "./loyaltyProgram.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LoyaltyProgram)
export class LoyaltyProgramResolver extends LoyaltyProgramResolverBase {
  constructor(
    protected readonly service: LoyaltyProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
