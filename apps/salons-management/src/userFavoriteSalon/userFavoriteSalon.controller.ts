import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserFavoriteSalonService } from "./userFavoriteSalon.service";
import { UserFavoriteSalonControllerBase } from "./base/userFavoriteSalon.controller.base";

@swagger.ApiTags("userFavoriteSalons")
@common.Controller("userFavoriteSalons")
export class UserFavoriteSalonController extends UserFavoriteSalonControllerBase {
  constructor(protected readonly service: UserFavoriteSalonService) {
    super(service);
  }
}
