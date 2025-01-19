import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MetricService } from "./metric.service";
import { MetricControllerBase } from "./base/metric.controller.base";

@swagger.ApiTags("metrics")
@common.Controller("metrics")
export class MetricController extends MetricControllerBase {
  constructor(protected readonly service: MetricService) {
    super(service);
  }
}
