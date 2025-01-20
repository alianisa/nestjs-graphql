import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeSlotService } from "./timeSlot.service";
import { TimeSlotGrpcControllerBase } from "./base/timeSlot.grpc.controller.base";

@swagger.ApiTags("timeSlots")
@common.Controller("timeSlots")
export class TimeSlotGrpcController extends TimeSlotGrpcControllerBase {
  constructor(protected readonly service: TimeSlotService) {
    super(service);
  }
}
