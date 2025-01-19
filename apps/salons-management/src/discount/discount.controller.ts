import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscountService } from "./discount.service";
import { DiscountControllerBase } from "./base/discount.controller.base";

@swagger.ApiTags("discounts")
@common.Controller("discounts")
export class DiscountController extends DiscountControllerBase {
  constructor(protected readonly service: DiscountService) {
    super(service);
  }
}
