import { Module } from "@nestjs/common";
import { PaymentModuleBase } from "./base/payment.module.base";
import { PaymentService } from "./payment.service";
import { PaymentController } from "./payment.controller";
import { PaymentGrpcController } from "./payment.grpc.controller";
import { PaymentResolver } from "./payment.resolver";

@Module({
  imports: [PaymentModuleBase],
  controllers: [PaymentController, PaymentGrpcController],
  providers: [PaymentService, PaymentResolver],
  exports: [PaymentService],
})
export class PaymentModule {}
