import { Module } from "@nestjs/common";
import { RefreshTokenModuleBase } from "./base/refreshToken.module.base";
import { RefreshTokenService } from "./refreshToken.service";
import { RefreshTokenController } from "./refreshToken.controller";
import { RefreshTokenGrpcController } from "./refreshToken.grpc.controller";
import { RefreshTokenResolver } from "./refreshToken.resolver";

@Module({
  imports: [RefreshTokenModuleBase],
  controllers: [RefreshTokenController, RefreshTokenGrpcController],
  providers: [RefreshTokenService, RefreshTokenResolver],
  exports: [RefreshTokenService],
})
export class RefreshTokenModule {}
