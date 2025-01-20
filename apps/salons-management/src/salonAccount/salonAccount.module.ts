import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalonAccountModuleBase } from "./base/salonAccount.module.base";
import { SalonAccountService } from "./salonAccount.service";
import { SalonAccountController } from "./salonAccount.controller";
import { SalonAccountGrpcController } from "./salonAccount.grpc.controller";
import { SalonAccountResolver } from "./salonAccount.resolver";

@Module({
  imports: [SalonAccountModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalonAccountController, SalonAccountGrpcController],
  providers: [SalonAccountService, SalonAccountResolver],
  exports: [SalonAccountService],
})
export class SalonAccountModule {}
