import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonRatingService } from "./salonRating.service";
import { SalonRatingGrpcControllerBase } from "./base/salonRating.grpc.controller.base";

@swagger.ApiTags("salonRatings")
@common.Controller("salonRatings")
export class SalonRatingGrpcController extends SalonRatingGrpcControllerBase {
  constructor(protected readonly service: SalonRatingService) {
    super(service);
  }
}
