import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserGenderService } from "./userGender.service";
import { UserGenderControllerBase } from "./base/userGender.controller.base";

@swagger.ApiTags("userGenders")
@common.Controller("userGenders")
export class UserGenderController extends UserGenderControllerBase {
  constructor(protected readonly service: UserGenderService) {
    super(service);
  }
}
