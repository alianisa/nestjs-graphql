import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonCategoryService } from "./salonCategory.service";
import { SalonCategoryControllerBase } from "./base/salonCategory.controller.base";

@swagger.ApiTags("salonCategories")
@common.Controller("salonCategories")
export class SalonCategoryController extends SalonCategoryControllerBase {
  constructor(protected readonly service: SalonCategoryService) {
    super(service);
  }
}
