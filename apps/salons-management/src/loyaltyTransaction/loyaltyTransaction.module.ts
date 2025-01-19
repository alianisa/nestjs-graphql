import { Module } from "@nestjs/common";
import { LoyaltyTransactionModuleBase } from "./base/loyaltyTransaction.module.base";
import { LoyaltyTransactionService } from "./loyaltyTransaction.service";
import { LoyaltyTransactionController } from "./loyaltyTransaction.controller";
import { LoyaltyTransactionGrpcController } from "./loyaltyTransaction.grpc.controller";
import { LoyaltyTransactionResolver } from "./loyaltyTransaction.resolver";

@Module({
  imports: [LoyaltyTransactionModuleBase],
  controllers: [LoyaltyTransactionController, LoyaltyTransactionGrpcController],
  providers: [LoyaltyTransactionService, LoyaltyTransactionResolver],
  exports: [LoyaltyTransactionService],
})
export class LoyaltyTransactionModule {}
