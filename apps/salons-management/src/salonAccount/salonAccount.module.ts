import { Module } from "@nestjs/common";
import { SalonAccountModuleBase } from "./base/salonAccount.module.base";
import { SalonAccountService } from "./salonAccount.service";
import { SalonAccountController } from "./salonAccount.controller";
import { SalonAccountGrpcController } from "./salonAccount.grpc.controller";
import { SalonAccountResolver } from "./salonAccount.resolver";

@Module({
  imports: [SalonAccountModuleBase],
  controllers: [SalonAccountController, SalonAccountGrpcController],
  providers: [SalonAccountService, SalonAccountResolver],
  exports: [SalonAccountService],
})
export class SalonAccountModule {}
