import * as graphql from "@nestjs/graphql";
import { SalonResolverBase } from "./base/salon.resolver.base";
import { Salon } from "./base/Salon";
import { SalonService } from "../salonService/base/SalonService";
import { SalonService } from "./salon.service";

@graphql.Resolver(() => Salon)
export class SalonResolver extends SalonResolverBase {
  constructor(protected readonly service: SalonService) {
    super(service);
  }
}
