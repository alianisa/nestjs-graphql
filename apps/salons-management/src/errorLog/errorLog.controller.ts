import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ErrorLogService } from "./errorLog.service";
import { ErrorLogControllerBase } from "./base/errorLog.controller.base";

@swagger.ApiTags("errorLogs")
@common.Controller("errorLogs")
export class ErrorLogController extends ErrorLogControllerBase {
  constructor(protected readonly service: ErrorLogService) {
    super(service);
  }
}
