import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SessionService } from "./session.service";
import { SessionGrpcControllerBase } from "./base/session.grpc.controller.base";

@swagger.ApiTags("sessions")
@common.Controller("sessions")
export class SessionGrpcController extends SessionGrpcControllerBase {
  constructor(protected readonly service: SessionService) {
    super(service);
  }
}
