import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SamlProviderService } from "./samlProvider.service";
import { SamlProviderControllerBase } from "./base/samlProvider.controller.base";

@swagger.ApiTags("samlProviders")
@common.Controller("samlProviders")
export class SamlProviderController extends SamlProviderControllerBase {
  constructor(protected readonly service: SamlProviderService) {
    super(service);
  }
}
