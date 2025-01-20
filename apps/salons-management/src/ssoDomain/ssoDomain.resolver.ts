import * as graphql from "@nestjs/graphql";
import { SsoDomainResolverBase } from "./base/ssoDomain.resolver.base";
import { SsoDomain } from "./base/SsoDomain";
import { SsoDomainService } from "./ssoDomain.service";

@graphql.Resolver(() => SsoDomain)
export class SsoDomainResolver extends SsoDomainResolverBase {
  constructor(protected readonly service: SsoDomainService) {
    super(service);
  }
}
