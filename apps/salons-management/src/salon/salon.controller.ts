import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonService } from "./salon.service";
import { SalonControllerBase } from "./base/salon.controller.base";

@swagger.ApiTags("salons")
@common.Controller("salons")
export class SalonController extends SalonControllerBase {
  constructor(protected readonly service: SalonService) {
    super(service);
  }
}
