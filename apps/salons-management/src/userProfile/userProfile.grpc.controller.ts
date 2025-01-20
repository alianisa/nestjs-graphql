import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserProfileService } from "./userProfile.service";
import { UserProfileGrpcControllerBase } from "./base/userProfile.grpc.controller.base";

@swagger.ApiTags("userProfiles")
@common.Controller("userProfiles")
export class UserProfileGrpcController extends UserProfileGrpcControllerBase {
  constructor(protected readonly service: UserProfileService) {
    super(service);
  }
}
