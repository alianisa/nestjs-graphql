import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonstestService } from "./salonstest.service";
import { SalonstestControllerBase } from "./base/salonstest.controller.base";

@swagger.ApiTags("salonstests")
@common.Controller("salonstests")
export class SalonstestController extends SalonstestControllerBase {
  constructor(protected readonly service: SalonstestService) {
    super(service);
  }
}
