import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlowStateService } from "./flowState.service";
import { FlowStateControllerBase } from "./base/flowState.controller.base";

@swagger.ApiTags("flowStates")
@common.Controller("flowStates")
export class FlowStateController extends FlowStateControllerBase {
  constructor(protected readonly service: FlowStateService) {
    super(service);
  }
}
