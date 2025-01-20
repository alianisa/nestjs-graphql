import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PromocodeService } from "./promocode.service";
import { PromocodeControllerBase } from "./base/promocode.controller.base";

@swagger.ApiTags("promocodes")
@common.Controller("promocodes")
export class PromocodeController extends PromocodeControllerBase {
  constructor(
    protected readonly service: PromocodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
