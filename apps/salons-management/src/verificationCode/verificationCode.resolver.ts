import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VerificationCodeResolverBase } from "./base/verificationCode.resolver.base";
import { VerificationCode } from "./base/VerificationCode";
import { VerificationCodeService } from "./verificationCode.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VerificationCode)
export class VerificationCodeResolver extends VerificationCodeResolverBase {
  constructor(
    protected readonly service: VerificationCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
