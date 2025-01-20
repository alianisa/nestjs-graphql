import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalonServiceCategoryService } from "./salonServiceCategory.service";
import { SalonServiceCategoryControllerBase } from "./base/salonServiceCategory.controller.base";

@swagger.ApiTags("salonServiceCategories")
@common.Controller("salonServiceCategories")
export class SalonServiceCategoryController extends SalonServiceCategoryControllerBase {
  constructor(
    protected readonly service: SalonServiceCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
