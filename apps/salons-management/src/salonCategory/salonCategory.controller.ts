import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalonCategoryService } from "./salonCategory.service";
import { SalonCategoryControllerBase } from "./base/salonCategory.controller.base";

@swagger.ApiTags("salonCategories")
@common.Controller("salonCategories")
export class SalonCategoryController extends SalonCategoryControllerBase {
  constructor(
    protected readonly service: SalonCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
