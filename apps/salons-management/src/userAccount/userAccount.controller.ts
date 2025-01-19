import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAccountService } from "./userAccount.service";
import { UserAccountControllerBase } from "./base/userAccount.controller.base";

@swagger.ApiTags("userAccounts")
@common.Controller("userAccounts")
export class UserAccountController extends UserAccountControllerBase {
  constructor(protected readonly service: UserAccountService) {
    super(service);
  }
}
