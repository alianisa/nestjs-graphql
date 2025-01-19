import * as graphql from "@nestjs/graphql";
import { SamlProviderResolverBase } from "./base/samlProvider.resolver.base";
import { SamlProvider } from "./base/SamlProvider";
import { SamlProviderService } from "./samlProvider.service";

@graphql.Resolver(() => SamlProvider)
export class SamlProviderResolver extends SamlProviderResolverBase {
  constructor(protected readonly service: SamlProviderService) {
    super(service);
  }
}
