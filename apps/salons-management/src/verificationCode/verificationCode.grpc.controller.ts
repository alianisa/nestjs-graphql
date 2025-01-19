import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VerificationCodeService } from "./verificationCode.service";
import { VerificationCodeGrpcControllerBase } from "./base/verificationCode.grpc.controller.base";

@swagger.ApiTags("verificationCodes")
@common.Controller("verificationCodes")
export class VerificationCodeGrpcController extends VerificationCodeGrpcControllerBase {
  constructor(protected readonly service: VerificationCodeService) {
    super(service);
  }
}
