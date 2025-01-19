import * as graphql from "@nestjs/graphql";
import { PromocodeResolverBase } from "./base/promocode.resolver.base";
import { Promocode } from "./base/Promocode";
import { PromocodeService } from "./promocode.service";

@graphql.Resolver(() => Promocode)
export class PromocodeResolver extends PromocodeResolverBase {
  constructor(protected readonly service: PromocodeService) {
    super(service);
  }
}
