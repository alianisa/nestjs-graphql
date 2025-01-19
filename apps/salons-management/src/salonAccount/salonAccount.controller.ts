import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonAccountService } from "./salonAccount.service";
import { SalonAccountControllerBase } from "./base/salonAccount.controller.base";

@swagger.ApiTags("salonAccounts")
@common.Controller("salonAccounts")
export class SalonAccountController extends SalonAccountControllerBase {
  constructor(protected readonly service: SalonAccountService) {
    super(service);
  }
}
