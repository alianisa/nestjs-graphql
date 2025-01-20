import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalonServiceModuleBase } from "./base/salonService.module.base";
import { SalonServiceService } from "./salonService.service";
import { SalonServiceController } from "./salonService.controller";
import { SalonServiceGrpcController } from "./salonService.grpc.controller";
import { SalonServiceResolver } from "./salonService.resolver";

@Module({
  imports: [SalonServiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalonServiceController, SalonServiceGrpcController],
  providers: [SalonServiceService, SalonServiceResolver],
  exports: [SalonServiceService],
})
export class SalonServiceModule {}
