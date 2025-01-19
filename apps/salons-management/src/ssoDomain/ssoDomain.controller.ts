import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SsoDomainService } from "./ssoDomain.service";
import { SsoDomainControllerBase } from "./base/ssoDomain.controller.base";

@swagger.ApiTags("ssoDomains")
@common.Controller("ssoDomains")
export class SsoDomainController extends SsoDomainControllerBase {
  constructor(protected readonly service: SsoDomainService) {
    super(service);
  }
}
