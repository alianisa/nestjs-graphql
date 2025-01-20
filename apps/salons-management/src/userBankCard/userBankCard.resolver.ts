import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserBankCardResolverBase } from "./base/userBankCard.resolver.base";
import { UserBankCard } from "./base/UserBankCard";
import { UserBankCardService } from "./userBankCard.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserBankCard)
export class UserBankCardResolver extends UserBankCardResolverBase {
  constructor(
    protected readonly service: UserBankCardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
