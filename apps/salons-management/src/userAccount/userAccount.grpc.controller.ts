import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAccountService } from "./userAccount.service";
import { UserAccountGrpcControllerBase } from "./base/userAccount.grpc.controller.base";

@swagger.ApiTags("userAccounts")
@common.Controller("userAccounts")
export class UserAccountGrpcController extends UserAccountGrpcControllerBase {
  constructor(protected readonly service: UserAccountService) {
    super(service);
  }
}
