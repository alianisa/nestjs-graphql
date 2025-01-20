import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserFavoriteSalonService } from "./userFavoriteSalon.service";
import { UserFavoriteSalonControllerBase } from "./base/userFavoriteSalon.controller.base";

@swagger.ApiTags("userFavoriteSalons")
@common.Controller("userFavoriteSalons")
export class UserFavoriteSalonController extends UserFavoriteSalonControllerBase {
  constructor(
    protected readonly service: UserFavoriteSalonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
