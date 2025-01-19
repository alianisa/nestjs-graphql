import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonServiceCategoryService } from "./salonServiceCategory.service";
import { SalonServiceCategoryGrpcControllerBase } from "./base/salonServiceCategory.grpc.controller.base";

@swagger.ApiTags("salonServiceCategories")
@common.Controller("salonServiceCategories")
export class SalonServiceCategoryGrpcController extends SalonServiceCategoryGrpcControllerBase {
  constructor(protected readonly service: SalonServiceCategoryService) {
    super(service);
  }
}
