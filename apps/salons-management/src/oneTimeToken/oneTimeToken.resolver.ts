import * as graphql from "@nestjs/graphql";
import { OneTimeTokenResolverBase } from "./base/oneTimeToken.resolver.base";
import { OneTimeToken } from "./base/OneTimeToken";
import { OneTimeTokenService } from "./oneTimeToken.service";

@graphql.Resolver(() => OneTimeToken)
export class OneTimeTokenResolver extends OneTimeTokenResolverBase {
  constructor(protected readonly service: OneTimeTokenService) {
    super(service);
  }
}
