import { Module } from "@nestjs/common";
import { UserBankCardModuleBase } from "./base/userBankCard.module.base";
import { UserBankCardService } from "./userBankCard.service";
import { UserBankCardController } from "./userBankCard.controller";
import { UserBankCardGrpcController } from "./userBankCard.grpc.controller";
import { UserBankCardResolver } from "./userBankCard.resolver";

@Module({
  imports: [UserBankCardModuleBase],
  controllers: [UserBankCardController, UserBankCardGrpcController],
  providers: [UserBankCardService, UserBankCardResolver],
  exports: [UserBankCardService],
})
export class UserBankCardModule {}
