import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonCategoryService } from "./salonCategory.service";
import { SalonCategoryGrpcControllerBase } from "./base/salonCategory.grpc.controller.base";

@swagger.ApiTags("salonCategories")
@common.Controller("salonCategories")
export class SalonCategoryGrpcController extends SalonCategoryGrpcControllerBase {
  constructor(protected readonly service: SalonCategoryService) {
    super(service);
  }
}
