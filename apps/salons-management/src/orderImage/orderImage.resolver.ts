import * as graphql from "@nestjs/graphql";
import { OrderImageResolverBase } from "./base/orderImage.resolver.base";
import { OrderImage } from "./base/OrderImage";
import { OrderImageService } from "./orderImage.service";

@graphql.Resolver(() => OrderImage)
export class OrderImageResolver extends OrderImageResolverBase {
  constructor(protected readonly service: OrderImageService) {
    super(service);
  }
}
