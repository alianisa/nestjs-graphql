import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SsoProviderService } from "./ssoProvider.service";
import { SsoProviderControllerBase } from "./base/ssoProvider.controller.base";

@swagger.ApiTags("ssoProviders")
@common.Controller("ssoProviders")
export class SsoProviderController extends SsoProviderControllerBase {
  constructor(protected readonly service: SsoProviderService) {
    super(service);
  }
}
