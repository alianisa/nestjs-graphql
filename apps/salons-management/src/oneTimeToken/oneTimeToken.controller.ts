import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OneTimeTokenService } from "./oneTimeToken.service";
import { OneTimeTokenControllerBase } from "./base/oneTimeToken.controller.base";

@swagger.ApiTags("oneTimeTokens")
@common.Controller("oneTimeTokens")
export class OneTimeTokenController extends OneTimeTokenControllerBase {
  constructor(protected readonly service: OneTimeTokenService) {
    super(service);
  }
}
