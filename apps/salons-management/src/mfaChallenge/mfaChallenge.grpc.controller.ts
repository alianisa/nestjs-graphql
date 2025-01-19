import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MfaChallengeService } from "./mfaChallenge.service";
import { MfaChallengeGrpcControllerBase } from "./base/mfaChallenge.grpc.controller.base";

@swagger.ApiTags("mfaChallenges")
@common.Controller("mfaChallenges")
export class MfaChallengeGrpcController extends MfaChallengeGrpcControllerBase {
  constructor(protected readonly service: MfaChallengeService) {
    super(service);
  }
}
