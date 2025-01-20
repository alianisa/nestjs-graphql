import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SamlProviderService } from "./samlProvider.service";
import { SamlProviderGrpcControllerBase } from "./base/samlProvider.grpc.controller.base";

@swagger.ApiTags("samlProviders")
@common.Controller("samlProviders")
export class SamlProviderGrpcController extends SamlProviderGrpcControllerBase {
  constructor(protected readonly service: SamlProviderService) {
    super(service);
  }
}
