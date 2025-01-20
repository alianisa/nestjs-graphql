import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MfaFactorService } from "./mfaFactor.service";
import { MfaFactorGrpcControllerBase } from "./base/mfaFactor.grpc.controller.base";

@swagger.ApiTags("mfaFactors")
@common.Controller("mfaFactors")
export class MfaFactorGrpcController extends MfaFactorGrpcControllerBase {
  constructor(protected readonly service: MfaFactorService) {
    super(service);
  }
}
