import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LoyaltyTransactionResolverBase } from "./base/loyaltyTransaction.resolver.base";
import { LoyaltyTransaction } from "./base/LoyaltyTransaction";
import { LoyaltyTransactionService } from "./loyaltyTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LoyaltyTransaction)
export class LoyaltyTransactionResolver extends LoyaltyTransactionResolverBase {
  constructor(
    protected readonly service: LoyaltyTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
