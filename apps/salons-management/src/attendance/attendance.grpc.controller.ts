import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AttendanceService } from "./attendance.service";
import { AttendanceGrpcControllerBase } from "./base/attendance.grpc.controller.base";

@swagger.ApiTags("attendances")
@common.Controller("attendances")
export class AttendanceGrpcController extends AttendanceGrpcControllerBase {
  constructor(protected readonly service: AttendanceService) {
    super(service);
  }
}
