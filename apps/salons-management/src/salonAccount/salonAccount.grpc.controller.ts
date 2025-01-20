import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonAccountService } from "./salonAccount.service";
import { SalonAccountGrpcControllerBase } from "./base/salonAccount.grpc.controller.base";

@swagger.ApiTags("salonAccounts")
@common.Controller("salonAccounts")
export class SalonAccountGrpcController extends SalonAccountGrpcControllerBase {
  constructor(protected readonly service: SalonAccountService) {
    super(service);
  }
}
