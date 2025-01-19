import * as graphql from "@nestjs/graphql";
import { UserAccountResolverBase } from "./base/userAccount.resolver.base";
import { UserAccount } from "./base/UserAccount";
import { UserAccountService } from "./userAccount.service";

@graphql.Resolver(() => UserAccount)
export class UserAccountResolver extends UserAccountResolverBase {
  constructor(protected readonly service: UserAccountService) {
    super(service);
  }
}
