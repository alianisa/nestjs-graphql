import * as graphql from "@nestjs/graphql";
import { SalonstestResolverBase } from "./base/salonstest.resolver.base";
import { Salonstest } from "./base/Salonstest";
import { SalonstestService } from "./salonstest.service";

@graphql.Resolver(() => Salonstest)
export class SalonstestResolver extends SalonstestResolverBase {
  constructor(protected readonly service: SalonstestService) {
    super(service);
  }
}
