import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserGenderService } from "./userGender.service";
import { UserGenderGrpcControllerBase } from "./base/userGender.grpc.controller.base";

@swagger.ApiTags("userGenders")
@common.Controller("userGenders")
export class UserGenderGrpcController extends UserGenderGrpcControllerBase {
  constructor(protected readonly service: UserGenderService) {
    super(service);
  }
}
