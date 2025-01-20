import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScheduleService } from "./schedule.service";
import { ScheduleGrpcControllerBase } from "./base/schedule.grpc.controller.base";

@swagger.ApiTags("schedules")
@common.Controller("schedules")
export class ScheduleGrpcController extends ScheduleGrpcControllerBase {
  constructor(protected readonly service: ScheduleService) {
    super(service);
  }
}
