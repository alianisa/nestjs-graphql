import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MfaAmrClaimService } from "./mfaAmrClaim.service";
import { MfaAmrClaimGrpcControllerBase } from "./base/mfaAmrClaim.grpc.controller.base";

@swagger.ApiTags("mfaAmrClaims")
@common.Controller("mfaAmrClaims")
export class MfaAmrClaimGrpcController extends MfaAmrClaimGrpcControllerBase {
  constructor(protected readonly service: MfaAmrClaimService) {
    super(service);
  }
}
