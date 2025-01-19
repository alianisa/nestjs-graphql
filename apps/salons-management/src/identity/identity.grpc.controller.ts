import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IdentityService } from "./identity.service";
import { IdentityGrpcControllerBase } from "./base/identity.grpc.controller.base";

@swagger.ApiTags("identities")
@common.Controller("identities")
export class IdentityGrpcController extends IdentityGrpcControllerBase {
  constructor(protected readonly service: IdentityService) {
    super(service);
  }
}
