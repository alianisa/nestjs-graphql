import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalonAccountService } from "./salonAccount.service";
import { SalonAccountControllerBase } from "./base/salonAccount.controller.base";

@swagger.ApiTags("salonAccounts")
@common.Controller("salonAccounts")
export class SalonAccountController extends SalonAccountControllerBase {
  constructor(
    protected readonly service: SalonAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
