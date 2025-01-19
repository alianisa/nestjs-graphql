import * as graphql from "@nestjs/graphql";
import { UserBankCardResolverBase } from "./base/userBankCard.resolver.base";
import { UserBankCard } from "./base/UserBankCard";
import { UserBankCardService } from "./userBankCard.service";

@graphql.Resolver(() => UserBankCard)
export class UserBankCardResolver extends UserBankCardResolverBase {
  constructor(protected readonly service: UserBankCardService) {
    super(service);
  }
}
