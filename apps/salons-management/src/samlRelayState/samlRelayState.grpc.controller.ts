import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SamlRelayStateService } from "./samlRelayState.service";
import { SamlRelayStateGrpcControllerBase } from "./base/samlRelayState.grpc.controller.base";

@swagger.ApiTags("samlRelayStates")
@common.Controller("samlRelayStates")
export class SamlRelayStateGrpcController extends SamlRelayStateGrpcControllerBase {
  constructor(protected readonly service: SamlRelayStateService) {
    super(service);
  }
}
