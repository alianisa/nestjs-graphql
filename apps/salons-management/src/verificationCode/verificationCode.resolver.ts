import * as graphql from "@nestjs/graphql";
import { VerificationCodeResolverBase } from "./base/verificationCode.resolver.base";
import { VerificationCode } from "./base/VerificationCode";
import { VerificationCodeService } from "./verificationCode.service";

@graphql.Resolver(() => VerificationCode)
export class VerificationCodeResolver extends VerificationCodeResolverBase {
  constructor(protected readonly service: VerificationCodeService) {
    super(service);
  }
}
