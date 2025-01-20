import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserFavoriteMasterService } from "./userFavoriteMaster.service";
import { UserFavoriteMasterControllerBase } from "./base/userFavoriteMaster.controller.base";

@swagger.ApiTags("userFavoriteMasters")
@common.Controller("userFavoriteMasters")
export class UserFavoriteMasterController extends UserFavoriteMasterControllerBase {
  constructor(
    protected readonly service: UserFavoriteMasterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
