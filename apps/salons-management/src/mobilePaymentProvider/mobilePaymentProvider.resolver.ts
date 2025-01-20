import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MobilePaymentProviderResolverBase } from "./base/mobilePaymentProvider.resolver.base";
import { MobilePaymentProvider } from "./base/MobilePaymentProvider";
import { MobilePaymentProviderService } from "./mobilePaymentProvider.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MobilePaymentProvider)
export class MobilePaymentProviderResolver extends MobilePaymentProviderResolverBase {
  constructor(
    protected readonly service: MobilePaymentProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
