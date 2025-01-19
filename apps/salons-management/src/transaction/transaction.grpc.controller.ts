import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransactionService } from "./transaction.service";
import { TransactionGrpcControllerBase } from "./base/transaction.grpc.controller.base";

@swagger.ApiTags("transactions")
@common.Controller("transactions")
export class TransactionGrpcController extends TransactionGrpcControllerBase {
  constructor(protected readonly service: TransactionService) {
    super(service);
  }
}
