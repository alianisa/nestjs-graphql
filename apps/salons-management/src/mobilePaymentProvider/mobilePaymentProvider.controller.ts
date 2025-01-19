import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MobilePaymentProviderService } from "./mobilePaymentProvider.service";
import { MobilePaymentProviderControllerBase } from "./base/mobilePaymentProvider.controller.base";

@swagger.ApiTags("mobilePaymentProviders")
@common.Controller("mobilePaymentProviders")
export class MobilePaymentProviderController extends MobilePaymentProviderControllerBase {
  constructor(protected readonly service: MobilePaymentProviderService) {
    super(service);
  }
}
