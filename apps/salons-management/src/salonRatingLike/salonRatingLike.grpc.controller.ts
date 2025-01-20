import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonRatingLikeService } from "./salonRatingLike.service";
import { SalonRatingLikeGrpcControllerBase } from "./base/salonRatingLike.grpc.controller.base";

@swagger.ApiTags("salonRatingLikes")
@common.Controller("salonRatingLikes")
export class SalonRatingLikeGrpcController extends SalonRatingLikeGrpcControllerBase {
  constructor(protected readonly service: SalonRatingLikeService) {
    super(service);
  }
}
