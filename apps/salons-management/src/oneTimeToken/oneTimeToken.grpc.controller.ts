import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OneTimeTokenService } from "./oneTimeToken.service";
import { OneTimeTokenGrpcControllerBase } from "./base/oneTimeToken.grpc.controller.base";

@swagger.ApiTags("oneTimeTokens")
@common.Controller("oneTimeTokens")
export class OneTimeTokenGrpcController extends OneTimeTokenGrpcControllerBase {
  constructor(protected readonly service: OneTimeTokenService) {
    super(service);
  }
}
