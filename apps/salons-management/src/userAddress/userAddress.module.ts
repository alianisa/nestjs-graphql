import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserAddressModuleBase } from "./base/userAddress.module.base";
import { UserAddressService } from "./userAddress.service";
import { UserAddressController } from "./userAddress.controller";
import { UserAddressGrpcController } from "./userAddress.grpc.controller";
import { UserAddressResolver } from "./userAddress.resolver";

@Module({
  imports: [UserAddressModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserAddressController, UserAddressGrpcController],
  providers: [UserAddressService, UserAddressResolver],
  exports: [UserAddressService],
})
export class UserAddressModule {}
