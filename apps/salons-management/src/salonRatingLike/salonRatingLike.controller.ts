import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalonRatingLikeService } from "./salonRatingLike.service";
import { SalonRatingLikeControllerBase } from "./base/salonRatingLike.controller.base";

@swagger.ApiTags("salonRatingLikes")
@common.Controller("salonRatingLikes")
export class SalonRatingLikeController extends SalonRatingLikeControllerBase {
  constructor(
    protected readonly service: SalonRatingLikeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
