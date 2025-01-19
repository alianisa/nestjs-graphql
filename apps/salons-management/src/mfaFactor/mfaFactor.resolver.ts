import * as graphql from "@nestjs/graphql";
import { MfaFactorResolverBase } from "./base/mfaFactor.resolver.base";
import { MfaFactor } from "./base/MfaFactor";
import { MfaFactorService } from "./mfaFactor.service";

@graphql.Resolver(() => MfaFactor)
export class MfaFactorResolver extends MfaFactorResolverBase {
  constructor(protected readonly service: MfaFactorService) {
    super(service);
  }
}
