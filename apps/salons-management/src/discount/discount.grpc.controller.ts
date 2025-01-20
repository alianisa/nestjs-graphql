import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscountService } from "./discount.service";
import { DiscountGrpcControllerBase } from "./base/discount.grpc.controller.base";

@swagger.ApiTags("discounts")
@common.Controller("discounts")
export class DiscountGrpcController extends DiscountGrpcControllerBase {
  constructor(protected readonly service: DiscountService) {
    super(service);
  }
}
