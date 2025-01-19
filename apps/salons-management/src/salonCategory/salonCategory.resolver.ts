import * as graphql from "@nestjs/graphql";
import { SalonCategoryResolverBase } from "./base/salonCategory.resolver.base";
import { SalonCategory } from "./base/SalonCategory";
import { SalonCategoryService } from "./salonCategory.service";

@graphql.Resolver(() => SalonCategory)
export class SalonCategoryResolver extends SalonCategoryResolverBase {
  constructor(protected readonly service: SalonCategoryService) {
    super(service);
  }
}
