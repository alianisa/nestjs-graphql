import * as graphql from "@nestjs/graphql";
import { SalonServiceCategoryResolverBase } from "./base/salonServiceCategory.resolver.base";
import { SalonServiceCategory } from "./base/SalonServiceCategory";
import { SalonServiceCategoryService } from "./salonServiceCategory.service";

@graphql.Resolver(() => SalonServiceCategory)
export class SalonServiceCategoryResolver extends SalonServiceCategoryResolverBase {
  constructor(protected readonly service: SalonServiceCategoryService) {
    super(service);
  }
}
