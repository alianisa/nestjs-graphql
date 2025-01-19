import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonService } from "./salon.service";
import { SalonGrpcControllerBase } from "./base/salon.grpc.controller.base";

@swagger.ApiTags("salons")
@common.Controller("salons")
export class SalonGrpcController extends SalonGrpcControllerBase {
  constructor(protected readonly service: SalonService) {
    super(service);
  }
}
