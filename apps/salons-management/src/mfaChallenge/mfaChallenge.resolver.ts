import * as graphql from "@nestjs/graphql";
import { MfaChallengeResolverBase } from "./base/mfaChallenge.resolver.base";
import { MfaChallenge } from "./base/MfaChallenge";
import { MfaChallengeService } from "./mfaChallenge.service";

@graphql.Resolver(() => MfaChallenge)
export class MfaChallengeResolver extends MfaChallengeResolverBase {
  constructor(protected readonly service: MfaChallengeService) {
    super(service);
  }
}
