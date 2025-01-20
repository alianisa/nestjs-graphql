import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlowStateService } from "./flowState.service";
import { FlowStateGrpcControllerBase } from "./base/flowState.grpc.controller.base";

@swagger.ApiTags("flowStates")
@common.Controller("flowStates")
export class FlowStateGrpcController extends FlowStateGrpcControllerBase {
  constructor(protected readonly service: FlowStateService) {
    super(service);
  }
}
