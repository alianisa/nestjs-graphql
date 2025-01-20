import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserRatingService } from "./userRating.service";
import { UserRatingControllerBase } from "./base/userRating.controller.base";

@swagger.ApiTags("userRatings")
@common.Controller("userRatings")
export class UserRatingController extends UserRatingControllerBase {
  constructor(
    protected readonly service: UserRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
