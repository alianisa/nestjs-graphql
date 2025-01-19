import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentService } from "./payment.service";
import { PaymentGrpcControllerBase } from "./base/payment.grpc.controller.base";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentGrpcController extends PaymentGrpcControllerBase {
  constructor(protected readonly service: PaymentService) {
    super(service);
  }
}
