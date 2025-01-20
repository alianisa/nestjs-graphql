import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromocodeService } from "./promocode.service";
import { PromocodeGrpcControllerBase } from "./base/promocode.grpc.controller.base";

@swagger.ApiTags("promocodes")
@common.Controller("promocodes")
export class PromocodeGrpcController extends PromocodeGrpcControllerBase {
  constructor(protected readonly service: PromocodeService) {
    super(service);
  }
}
