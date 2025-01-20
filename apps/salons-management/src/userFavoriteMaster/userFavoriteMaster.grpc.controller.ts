import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserFavoriteMasterService } from "./userFavoriteMaster.service";
import { UserFavoriteMasterGrpcControllerBase } from "./base/userFavoriteMaster.grpc.controller.base";

@swagger.ApiTags("userFavoriteMasters")
@common.Controller("userFavoriteMasters")
export class UserFavoriteMasterGrpcController extends UserFavoriteMasterGrpcControllerBase {
  constructor(protected readonly service: UserFavoriteMasterService) {
    super(service);
  }
}
