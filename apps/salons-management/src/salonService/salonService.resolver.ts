import * as graphql from "@nestjs/graphql";
import { SalonServiceResolverBase } from "./base/salonService.resolver.base";
import { SalonService } from "./base/SalonService";
import { SalonServiceService } from "./salonService.service";

@graphql.Resolver(() => SalonService)
export class SalonServiceResolver extends SalonServiceResolverBase {
  constructor(protected readonly service: SalonServiceService) {
    super(service);
  }
}
