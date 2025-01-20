import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LoyaltyTransactionModuleBase } from "./base/loyaltyTransaction.module.base";
import { LoyaltyTransactionService } from "./loyaltyTransaction.service";
import { LoyaltyTransactionController } from "./loyaltyTransaction.controller";
import { LoyaltyTransactionGrpcController } from "./loyaltyTransaction.grpc.controller";
import { LoyaltyTransactionResolver } from "./loyaltyTransaction.resolver";

@Module({
  imports: [LoyaltyTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [LoyaltyTransactionController, LoyaltyTransactionGrpcController],
  providers: [LoyaltyTransactionService, LoyaltyTransactionResolver],
  exports: [LoyaltyTransactionService],
})
export class LoyaltyTransactionModule {}
