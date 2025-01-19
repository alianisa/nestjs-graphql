import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonstestService } from "./salonstest.service";
import { SalonstestGrpcControllerBase } from "./base/salonstest.grpc.controller.base";

@swagger.ApiTags("salonstests")
@common.Controller("salonstests")
export class SalonstestGrpcController extends SalonstestGrpcControllerBase {
  constructor(protected readonly service: SalonstestService) {
    super(service);
  }
}
