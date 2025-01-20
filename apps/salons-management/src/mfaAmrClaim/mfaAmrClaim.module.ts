import { Module } from "@nestjs/common";
import { MfaAmrClaimModuleBase } from "./base/mfaAmrClaim.module.base";
import { MfaAmrClaimService } from "./mfaAmrClaim.service";
import { MfaAmrClaimController } from "./mfaAmrClaim.controller";
import { MfaAmrClaimGrpcController } from "./mfaAmrClaim.grpc.controller";
import { MfaAmrClaimResolver } from "./mfaAmrClaim.resolver";

@Module({
  imports: [MfaAmrClaimModuleBase],
  controllers: [MfaAmrClaimController, MfaAmrClaimGrpcController],
  providers: [MfaAmrClaimService, MfaAmrClaimResolver],
  exports: [MfaAmrClaimService],
})
export class MfaAmrClaimModule {}
