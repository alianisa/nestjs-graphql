import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalonService } from "./salon.service";
import { SalonControllerBase } from "./base/salon.controller.base";

@swagger.ApiTags("salons")
@common.Controller("salons")
export class SalonController extends SalonControllerBase {
  constructor(
    protected readonly service: SalonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
