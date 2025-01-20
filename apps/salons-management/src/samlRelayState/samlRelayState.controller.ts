import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SamlRelayStateService } from "./samlRelayState.service";
import { SamlRelayStateControllerBase } from "./base/samlRelayState.controller.base";

@swagger.ApiTags("samlRelayStates")
@common.Controller("samlRelayStates")
export class SamlRelayStateController extends SamlRelayStateControllerBase {
  constructor(protected readonly service: SamlRelayStateService) {
    super(service);
  }
}
