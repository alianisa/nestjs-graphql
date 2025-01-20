import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MobilePaymentProviderService } from "./mobilePaymentProvider.service";
import { MobilePaymentProviderGrpcControllerBase } from "./base/mobilePaymentProvider.grpc.controller.base";

@swagger.ApiTags("mobilePaymentProviders")
@common.Controller("mobilePaymentProviders")
export class MobilePaymentProviderGrpcController extends MobilePaymentProviderGrpcControllerBase {
  constructor(protected readonly service: MobilePaymentProviderService) {
    super(service);
  }
}
