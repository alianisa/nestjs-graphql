import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MetricService } from "./metric.service";
import { MetricGrpcControllerBase } from "./base/metric.grpc.controller.base";

@swagger.ApiTags("metrics")
@common.Controller("metrics")
export class MetricGrpcController extends MetricGrpcControllerBase {
  constructor(protected readonly service: MetricService) {
    super(service);
  }
}
