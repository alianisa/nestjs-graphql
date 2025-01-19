import * as graphql from "@nestjs/graphql";
import { SsoProviderResolverBase } from "./base/ssoProvider.resolver.base";
import { SsoProvider } from "./base/SsoProvider";
import { SsoProviderService } from "./ssoProvider.service";

@graphql.Resolver(() => SsoProvider)
export class SsoProviderResolver extends SsoProviderResolverBase {
  constructor(protected readonly service: SsoProviderService) {
    super(service);
  }
}
