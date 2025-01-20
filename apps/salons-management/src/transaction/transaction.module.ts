import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransactionModuleBase } from "./base/transaction.module.base";
import { TransactionService } from "./transaction.service";
import { TransactionController } from "./transaction.controller";
import { TransactionGrpcController } from "./transaction.grpc.controller";
import { TransactionResolver } from "./transaction.resolver";

@Module({
  imports: [TransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransactionController, TransactionGrpcController],
  providers: [TransactionService, TransactionResolver],
  exports: [TransactionService],
})
export class TransactionModule {}
