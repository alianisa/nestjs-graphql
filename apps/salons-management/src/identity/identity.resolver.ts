import * as graphql from "@nestjs/graphql";
import { IdentityResolverBase } from "./base/identity.resolver.base";
import { Identity } from "./base/Identity";
import { IdentityService } from "./identity.service";

@graphql.Resolver(() => Identity)
export class IdentityResolver extends IdentityResolverBase {
  constructor(protected readonly service: IdentityService) {
    super(service);
  }
}
