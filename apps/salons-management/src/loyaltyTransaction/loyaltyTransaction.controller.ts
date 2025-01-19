import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LoyaltyTransactionService } from "./loyaltyTransaction.service";
import { LoyaltyTransactionControllerBase } from "./base/loyaltyTransaction.controller.base";

@swagger.ApiTags("loyaltyTransactions")
@common.Controller("loyaltyTransactions")
export class LoyaltyTransactionController extends LoyaltyTransactionControllerBase {
  constructor(protected readonly service: LoyaltyTransactionService) {
    super(service);
  }
}
