import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MfaChallengeService } from "./mfaChallenge.service";
import { MfaChallengeControllerBase } from "./base/mfaChallenge.controller.base";

@swagger.ApiTags("mfaChallenges")
@common.Controller("mfaChallenges")
export class MfaChallengeController extends MfaChallengeControllerBase {
  constructor(protected readonly service: MfaChallengeService) {
    super(service);
  }
}
