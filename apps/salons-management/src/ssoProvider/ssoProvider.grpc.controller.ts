import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SsoProviderService } from "./ssoProvider.service";
import { SsoProviderGrpcControllerBase } from "./base/ssoProvider.grpc.controller.base";

@swagger.ApiTags("ssoProviders")
@common.Controller("ssoProviders")
export class SsoProviderGrpcController extends SsoProviderGrpcControllerBase {
  constructor(protected readonly service: SsoProviderService) {
    super(service);
  }
}
