import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonServiceService } from "./salonService.service";
import { SalonServiceGrpcControllerBase } from "./base/salonService.grpc.controller.base";

@swagger.ApiTags("salonServices")
@common.Controller("salonServices")
export class SalonServiceGrpcController extends SalonServiceGrpcControllerBase {
  constructor(protected readonly service: SalonServiceService) {
    super(service);
  }
}
