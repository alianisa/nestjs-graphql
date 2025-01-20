import * as graphql from "@nestjs/graphql";
import { MfaAmrClaimResolverBase } from "./base/mfaAmrClaim.resolver.base";
import { MfaAmrClaim } from "./base/MfaAmrClaim";
import { MfaAmrClaimService } from "./mfaAmrClaim.service";

@graphql.Resolver(() => MfaAmrClaim)
export class MfaAmrClaimResolver extends MfaAmrClaimResolverBase {
  constructor(protected readonly service: MfaAmrClaimService) {
    super(service);
  }
}
