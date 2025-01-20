import { Module } from "@nestjs/common";
import { OneTimeTokenModuleBase } from "./base/oneTimeToken.module.base";
import { OneTimeTokenService } from "./oneTimeToken.service";
import { OneTimeTokenController } from "./oneTimeToken.controller";
import { OneTimeTokenGrpcController } from "./oneTimeToken.grpc.controller";
import { OneTimeTokenResolver } from "./oneTimeToken.resolver";

@Module({
  imports: [OneTimeTokenModuleBase],
  controllers: [OneTimeTokenController, OneTimeTokenGrpcController],
  providers: [OneTimeTokenService, OneTimeTokenResolver],
  exports: [OneTimeTokenService],
})
export class OneTimeTokenModule {}
