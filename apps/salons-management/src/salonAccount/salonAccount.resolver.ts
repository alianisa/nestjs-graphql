import * as graphql from "@nestjs/graphql";
import { SalonAccountResolverBase } from "./base/salonAccount.resolver.base";
import { SalonAccount } from "./base/SalonAccount";
import { SalonAccountService } from "./salonAccount.service";

@graphql.Resolver(() => SalonAccount)
export class SalonAccountResolver extends SalonAccountResolverBase {
  constructor(protected readonly service: SalonAccountService) {
    super(service);
  }
}
