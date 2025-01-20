import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstanceService } from "./instance.service";
import { InstanceGrpcControllerBase } from "./base/instance.grpc.controller.base";

@swagger.ApiTags("instances")
@common.Controller("instances")
export class InstanceGrpcController extends InstanceGrpcControllerBase {
  constructor(protected readonly service: InstanceService) {
    super(service);
  }
}
