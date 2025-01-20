import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SsoDomainService } from "./ssoDomain.service";
import { SsoDomainGrpcControllerBase } from "./base/ssoDomain.grpc.controller.base";

@swagger.ApiTags("ssoDomains")
@common.Controller("ssoDomains")
export class SsoDomainGrpcController extends SsoDomainGrpcControllerBase {
  constructor(protected readonly service: SsoDomainService) {
    super(service);
  }
}
