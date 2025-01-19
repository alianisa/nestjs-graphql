import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LoyaltyProgramService } from "./loyaltyProgram.service";
import { LoyaltyProgramGrpcControllerBase } from "./base/loyaltyProgram.grpc.controller.base";

@swagger.ApiTags("loyaltyPrograms")
@common.Controller("loyaltyPrograms")
export class LoyaltyProgramGrpcController extends LoyaltyProgramGrpcControllerBase {
  constructor(protected readonly service: LoyaltyProgramService) {
    super(service);
  }
}
