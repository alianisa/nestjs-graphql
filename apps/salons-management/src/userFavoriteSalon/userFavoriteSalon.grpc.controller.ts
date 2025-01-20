import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserFavoriteSalonService } from "./userFavoriteSalon.service";
import { UserFavoriteSalonGrpcControllerBase } from "./base/userFavoriteSalon.grpc.controller.base";

@swagger.ApiTags("userFavoriteSalons")
@common.Controller("userFavoriteSalons")
export class UserFavoriteSalonGrpcController extends UserFavoriteSalonGrpcControllerBase {
  constructor(protected readonly service: UserFavoriteSalonService) {
    super(service);
  }
}
