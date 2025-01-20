import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LoyaltyProgramService } from "./loyaltyProgram.service";
import { LoyaltyProgramControllerBase } from "./base/loyaltyProgram.controller.base";

@swagger.ApiTags("loyaltyPrograms")
@common.Controller("loyaltyPrograms")
export class LoyaltyProgramController extends LoyaltyProgramControllerBase {
  constructor(
    protected readonly service: LoyaltyProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
