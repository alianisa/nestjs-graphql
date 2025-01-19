import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonRatingService } from "./salonRating.service";
import { SalonRatingControllerBase } from "./base/salonRating.controller.base";

@swagger.ApiTags("salonRatings")
@common.Controller("salonRatings")
export class SalonRatingController extends SalonRatingControllerBase {
  constructor(protected readonly service: SalonRatingService) {
    super(service);
  }
}
