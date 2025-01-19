import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrderImageService } from "./orderImage.service";
import { OrderImageGrpcControllerBase } from "./base/orderImage.grpc.controller.base";

@swagger.ApiTags("orderImages")
@common.Controller("orderImages")
export class OrderImageGrpcController extends OrderImageGrpcControllerBase {
  constructor(protected readonly service: OrderImageService) {
    super(service);
  }
}
