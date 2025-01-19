import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserFavoriteMasterService } from "./userFavoriteMaster.service";
import { UserFavoriteMasterControllerBase } from "./base/userFavoriteMaster.controller.base";

@swagger.ApiTags("userFavoriteMasters")
@common.Controller("userFavoriteMasters")
export class UserFavoriteMasterController extends UserFavoriteMasterControllerBase {
  constructor(protected readonly service: UserFavoriteMasterService) {
    super(service);
  }
}
