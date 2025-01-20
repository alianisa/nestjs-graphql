import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserBankCardService } from "./userBankCard.service";
import { UserBankCardControllerBase } from "./base/userBankCard.controller.base";

@swagger.ApiTags("userBankCards")
@common.Controller("userBankCards")
export class UserBankCardController extends UserBankCardControllerBase {
  constructor(
    protected readonly service: UserBankCardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
