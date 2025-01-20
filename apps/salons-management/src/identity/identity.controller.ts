import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IdentityService } from "./identity.service";
import { IdentityControllerBase } from "./base/identity.controller.base";

@swagger.ApiTags("identities")
@common.Controller("identities")
export class IdentityController extends IdentityControllerBase {
  constructor(protected readonly service: IdentityService) {
    super(service);
  }
}
