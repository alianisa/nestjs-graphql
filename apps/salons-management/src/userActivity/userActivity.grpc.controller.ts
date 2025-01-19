import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserActivityService } from "./userActivity.service";
import { UserActivityGrpcControllerBase } from "./base/userActivity.grpc.controller.base";

@swagger.ApiTags("userActivities")
@common.Controller("userActivities")
export class UserActivityGrpcController extends UserActivityGrpcControllerBase {
  constructor(protected readonly service: UserActivityService) {
    super(service);
  }
}
