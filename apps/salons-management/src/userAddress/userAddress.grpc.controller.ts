import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAddressService } from "./userAddress.service";
import { UserAddressGrpcControllerBase } from "./base/userAddress.grpc.controller.base";

@swagger.ApiTags("userAddresses")
@common.Controller("userAddresses")
export class UserAddressGrpcController extends UserAddressGrpcControllerBase {
  constructor(protected readonly service: UserAddressService) {
    super(service);
  }
}
