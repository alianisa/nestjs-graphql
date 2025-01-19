import * as graphql from "@nestjs/graphql";
import { UserAddressResolverBase } from "./base/userAddress.resolver.base";
import { UserAddress } from "./base/UserAddress";
import { UserAddressService } from "./userAddress.service";

@graphql.Resolver(() => UserAddress)
export class UserAddressResolver extends UserAddressResolverBase {
  constructor(protected readonly service: UserAddressService) {
    super(service);
  }
}
