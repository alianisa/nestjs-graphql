import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepositService } from "./deposit.service";
import { DepositControllerBase } from "./base/deposit.controller.base";

@swagger.ApiTags("deposits")
@common.Controller("deposits")
export class DepositController extends DepositControllerBase {
  constructor(protected readonly service: DepositService) {
    super(service);
  }
}
