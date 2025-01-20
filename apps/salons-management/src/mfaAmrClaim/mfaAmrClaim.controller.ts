import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MfaAmrClaimService } from "./mfaAmrClaim.service";
import { MfaAmrClaimControllerBase } from "./base/mfaAmrClaim.controller.base";

@swagger.ApiTags("mfaAmrClaims")
@common.Controller("mfaAmrClaims")
export class MfaAmrClaimController extends MfaAmrClaimControllerBase {
  constructor(protected readonly service: MfaAmrClaimService) {
    super(service);
  }
}
