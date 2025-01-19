import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LoyaltyTransactionService } from "./loyaltyTransaction.service";
import { LoyaltyTransactionGrpcControllerBase } from "./base/loyaltyTransaction.grpc.controller.base";

@swagger.ApiTags("loyaltyTransactions")
@common.Controller("loyaltyTransactions")
export class LoyaltyTransactionGrpcController extends LoyaltyTransactionGrpcControllerBase {
  constructor(protected readonly service: LoyaltyTransactionService) {
    super(service);
  }
}
