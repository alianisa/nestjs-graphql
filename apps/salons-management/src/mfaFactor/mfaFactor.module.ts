import { Module } from "@nestjs/common";
import { MfaFactorModuleBase } from "./base/mfaFactor.module.base";
import { MfaFactorService } from "./mfaFactor.service";
import { MfaFactorController } from "./mfaFactor.controller";
import { MfaFactorGrpcController } from "./mfaFactor.grpc.controller";
import { MfaFactorResolver } from "./mfaFactor.resolver";

@Module({
  imports: [MfaFactorModuleBase],
  controllers: [MfaFactorController, MfaFactorGrpcController],
  providers: [MfaFactorService, MfaFactorResolver],
  exports: [MfaFactorService],
})
export class MfaFactorModule {}
