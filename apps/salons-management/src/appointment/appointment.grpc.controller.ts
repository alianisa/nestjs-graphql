import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppointmentService } from "./appointment.service";
import { AppointmentGrpcControllerBase } from "./base/appointment.grpc.controller.base";

@swagger.ApiTags("appointments")
@common.Controller("appointments")
export class AppointmentGrpcController extends AppointmentGrpcControllerBase {
  constructor(protected readonly service: AppointmentService) {
    super(service);
  }
}
