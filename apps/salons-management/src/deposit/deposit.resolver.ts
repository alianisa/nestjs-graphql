import * as graphql from "@nestjs/graphql";
import { DepositResolverBase } from "./base/deposit.resolver.base";
import { Deposit } from "./base/Deposit";
import { DepositService } from "./deposit.service";

@graphql.Resolver(() => Deposit)
export class DepositResolver extends DepositResolverBase {
  constructor(protected readonly service: DepositService) {
    super(service);
  }
}
