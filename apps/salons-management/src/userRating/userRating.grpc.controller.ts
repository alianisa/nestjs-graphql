import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserRatingService } from "./userRating.service";
import { UserRatingGrpcControllerBase } from "./base/userRating.grpc.controller.base";

@swagger.ApiTags("userRatings")
@common.Controller("userRatings")
export class UserRatingGrpcController extends UserRatingGrpcControllerBase {
  constructor(protected readonly service: UserRatingService) {
    super(service);
  }
}
