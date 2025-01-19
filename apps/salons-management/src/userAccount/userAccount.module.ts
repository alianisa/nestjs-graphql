import { Module } from "@nestjs/common";
import { UserAccountModuleBase } from "./base/userAccount.module.base";
import { UserAccountService } from "./userAccount.service";
import { UserAccountController } from "./userAccount.controller";
import { UserAccountGrpcController } from "./userAccount.grpc.controller";
import { UserAccountResolver } from "./userAccount.resolver";

@Module({
  imports: [UserAccountModuleBase],
  controllers: [UserAccountController, UserAccountGrpcController],
  providers: [UserAccountService, UserAccountResolver],
  exports: [UserAccountService],
})
export class UserAccountModule {}
