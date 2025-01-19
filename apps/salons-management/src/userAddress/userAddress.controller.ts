import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAddressService } from "./userAddress.service";
import { UserAddressControllerBase } from "./base/userAddress.controller.base";

@swagger.ApiTags("userAddresses")
@common.Controller("userAddresses")
export class UserAddressController extends UserAddressControllerBase {
  constructor(protected readonly service: UserAddressService) {
    super(service);
  }
}
