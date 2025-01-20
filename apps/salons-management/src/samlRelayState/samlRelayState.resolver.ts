import * as graphql from "@nestjs/graphql";
import { SamlRelayStateResolverBase } from "./base/samlRelayState.resolver.base";
import { SamlRelayState } from "./base/SamlRelayState";
import { SamlRelayStateService } from "./samlRelayState.service";

@graphql.Resolver(() => SamlRelayState)
export class SamlRelayStateResolver extends SamlRelayStateResolverBase {
  constructor(protected readonly service: SamlRelayStateService) {
    super(service);
  }
}
