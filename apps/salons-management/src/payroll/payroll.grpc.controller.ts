import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PayrollService } from "./payroll.service";
import { PayrollGrpcControllerBase } from "./base/payroll.grpc.controller.base";

@swagger.ApiTags("payrolls")
@common.Controller("payrolls")
export class PayrollGrpcController extends PayrollGrpcControllerBase {
  constructor(protected readonly service: PayrollService) {
    super(service);
  }
}
