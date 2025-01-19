import { Module } from "@nestjs/common";
import { UserAddressModuleBase } from "./base/userAddress.module.base";
import { UserAddressService } from "./userAddress.service";
import { UserAddressController } from "./userAddress.controller";
import { UserAddressGrpcController } from "./userAddress.grpc.controller";
import { UserAddressResolver } from "./userAddress.resolver";

@Module({
  imports: [UserAddressModuleBase],
  controllers: [UserAddressController, UserAddressGrpcController],
  providers: [UserAddressService, UserAddressResolver],
  exports: [UserAddressService],
})
export class UserAddressModule {}
