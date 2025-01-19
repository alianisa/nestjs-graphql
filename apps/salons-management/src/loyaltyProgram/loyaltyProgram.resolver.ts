import * as graphql from "@nestjs/graphql";
import { LoyaltyProgramResolverBase } from "./base/loyaltyProgram.resolver.base";
import { LoyaltyProgram } from "./base/LoyaltyProgram";
import { LoyaltyProgramService } from "./loyaltyProgram.service";

@graphql.Resolver(() => LoyaltyProgram)
export class LoyaltyProgramResolver extends LoyaltyProgramResolverBase {
  constructor(protected readonly service: LoyaltyProgramService) {
    super(service);
  }
}
