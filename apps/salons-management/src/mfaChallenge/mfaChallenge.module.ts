import { Module } from "@nestjs/common";
import { MfaChallengeModuleBase } from "./base/mfaChallenge.module.base";
import { MfaChallengeService } from "./mfaChallenge.service";
import { MfaChallengeController } from "./mfaChallenge.controller";
import { MfaChallengeGrpcController } from "./mfaChallenge.grpc.controller";
import { MfaChallengeResolver } from "./mfaChallenge.resolver";

@Module({
  imports: [MfaChallengeModuleBase],
  controllers: [MfaChallengeController, MfaChallengeGrpcController],
  providers: [MfaChallengeService, MfaChallengeResolver],
  exports: [MfaChallengeService],
})
export class MfaChallengeModule {}
