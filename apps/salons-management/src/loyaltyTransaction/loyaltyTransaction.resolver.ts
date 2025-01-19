import * as graphql from "@nestjs/graphql";
import { LoyaltyTransactionResolverBase } from "./base/loyaltyTransaction.resolver.base";
import { LoyaltyTransaction } from "./base/LoyaltyTransaction";
import { LoyaltyTransactionService } from "./loyaltyTransaction.service";

@graphql.Resolver(() => LoyaltyTransaction)
export class LoyaltyTransactionResolver extends LoyaltyTransactionResolverBase {
  constructor(protected readonly service: LoyaltyTransactionService) {
    super(service);
  }
}
