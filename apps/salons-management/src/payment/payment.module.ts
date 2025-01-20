import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentModuleBase } from "./base/payment.module.base";
import { PaymentService } from "./payment.service";
import { PaymentController } from "./payment.controller";
import { PaymentGrpcController } from "./payment.grpc.controller";
import { PaymentResolver } from "./payment.resolver";

@Module({
  imports: [PaymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentController, PaymentGrpcController],
  providers: [PaymentService, PaymentResolver],
  exports: [PaymentService],
})
export class PaymentModule {}
