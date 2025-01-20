import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserAccountModuleBase } from "./base/userAccount.module.base";
import { UserAccountService } from "./userAccount.service";
import { UserAccountController } from "./userAccount.controller";
import { UserAccountGrpcController } from "./userAccount.grpc.controller";
import { UserAccountResolver } from "./userAccount.resolver";

@Module({
  imports: [UserAccountModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserAccountController, UserAccountGrpcController],
  providers: [UserAccountService, UserAccountResolver],
  exports: [UserAccountService],
})
export class UserAccountModule {}
