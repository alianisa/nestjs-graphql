import { Module } from "@nestjs/common";
import { VerificationCodeModuleBase } from "./base/verificationCode.module.base";
import { VerificationCodeService } from "./verificationCode.service";
import { VerificationCodeController } from "./verificationCode.controller";
import { VerificationCodeGrpcController } from "./verificationCode.grpc.controller";
import { VerificationCodeResolver } from "./verificationCode.resolver";

@Module({
  imports: [VerificationCodeModuleBase],
  controllers: [VerificationCodeController, VerificationCodeGrpcController],
  providers: [VerificationCodeService, VerificationCodeResolver],
  exports: [VerificationCodeService],
})
export class VerificationCodeModule {}
