import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalonServiceService } from "./salonService.service";
import { SalonServiceControllerBase } from "./base/salonService.controller.base";

@swagger.ApiTags("salonServices")
@common.Controller("salonServices")
export class SalonServiceController extends SalonServiceControllerBase {
  constructor(
    protected readonly service: SalonServiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
