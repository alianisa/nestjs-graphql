import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MfaFactorService } from "./mfaFactor.service";
import { MfaFactorControllerBase } from "./base/mfaFactor.controller.base";

@swagger.ApiTags("mfaFactors")
@common.Controller("mfaFactors")
export class MfaFactorController extends MfaFactorControllerBase {
  constructor(protected readonly service: MfaFactorService) {
    super(service);
  }
}
