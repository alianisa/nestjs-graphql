import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalonModuleBase } from "./base/salon.module.base";
import { SalonService } from "./salon.service";
import { SalonController } from "./salon.controller";
import { SalonGrpcController } from "./salon.grpc.controller";
import { SalonResolver } from "./salon.resolver";

@Module({
  imports: [SalonModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalonController, SalonGrpcController],
  providers: [SalonService, SalonResolver],
  exports: [SalonService],
})
export class SalonModule {}
