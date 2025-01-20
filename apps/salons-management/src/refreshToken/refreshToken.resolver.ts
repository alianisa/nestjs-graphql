import * as graphql from "@nestjs/graphql";
import { RefreshTokenResolverBase } from "./base/refreshToken.resolver.base";
import { RefreshToken } from "./base/RefreshToken";
import { RefreshTokenService } from "./refreshToken.service";

@graphql.Resolver(() => RefreshToken)
export class RefreshTokenResolver extends RefreshTokenResolverBase {
  constructor(protected readonly service: RefreshTokenService) {
    super(service);
  }
}
