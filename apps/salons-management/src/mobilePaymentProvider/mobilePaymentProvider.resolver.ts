import * as graphql from "@nestjs/graphql";
import { MobilePaymentProviderResolverBase } from "./base/mobilePaymentProvider.resolver.base";
import { MobilePaymentProvider } from "./base/MobilePaymentProvider";
import { MobilePaymentProviderService } from "./mobilePaymentProvider.service";

@graphql.Resolver(() => MobilePaymentProvider)
export class MobilePaymentProviderResolver extends MobilePaymentProviderResolverBase {
  constructor(protected readonly service: MobilePaymentProviderService) {
    super(service);
  }
}
