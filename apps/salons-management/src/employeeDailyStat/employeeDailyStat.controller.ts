import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeDailyStatService } from "./employeeDailyStat.service";
import { EmployeeDailyStatControllerBase } from "./base/employeeDailyStat.controller.base";

@swagger.ApiTags("employeeDailyStats")
@common.Controller("employeeDailyStats")
export class EmployeeDailyStatController extends EmployeeDailyStatControllerBase {
  constructor(protected readonly service: EmployeeDailyStatService) {
    super(service);
  }
}
