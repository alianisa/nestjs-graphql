import * as graphql from "@nestjs/graphql";
import { DiscountResolverBase } from "./base/discount.resolver.base";
import { Discount } from "./base/Discount";
import { DiscountService } from "./discount.service";

@graphql.Resolver(() => Discount)
export class DiscountResolver extends DiscountResolverBase {
  constructor(protected readonly service: DiscountService) {
    super(service);
  }
}
