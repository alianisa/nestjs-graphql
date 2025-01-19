import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VerificationCodeService } from "./verificationCode.service";
import { VerificationCodeControllerBase } from "./base/verificationCode.controller.base";

@swagger.ApiTags("verificationCodes")
@common.Controller("verificationCodes")
export class VerificationCodeController extends VerificationCodeControllerBase {
  constructor(protected readonly service: VerificationCodeService) {
    super(service);
  }
}
