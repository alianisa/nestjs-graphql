import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserBankCardService } from "./userBankCard.service";
import { UserBankCardGrpcControllerBase } from "./base/userBankCard.grpc.controller.base";

@swagger.ApiTags("userBankCards")
@common.Controller("userBankCards")
export class UserBankCardGrpcController extends UserBankCardGrpcControllerBase {
  constructor(protected readonly service: UserBankCardService) {
    super(service);
  }
}
