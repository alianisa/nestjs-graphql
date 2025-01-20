import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ErrorLogService } from "./errorLog.service";
import { ErrorLogGrpcControllerBase } from "./base/errorLog.grpc.controller.base";

@swagger.ApiTags("errorLogs")
@common.Controller("errorLogs")
export class ErrorLogGrpcController extends ErrorLogGrpcControllerBase {
  constructor(protected readonly service: ErrorLogService) {
    super(service);
  }
}
