import { Module } from "@nestjs/common";
import { IdentityModuleBase } from "./base/identity.module.base";
import { IdentityService } from "./identity.service";
import { IdentityController } from "./identity.controller";
import { IdentityGrpcController } from "./identity.grpc.controller";
import { IdentityResolver } from "./identity.resolver";

@Module({
  imports: [IdentityModuleBase],
  controllers: [IdentityController, IdentityGrpcController],
  providers: [IdentityService, IdentityResolver],
  exports: [IdentityService],
})
export class IdentityModule {}
