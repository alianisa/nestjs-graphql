import { Module } from "@nestjs/common";
import { SsoDomainModuleBase } from "./base/ssoDomain.module.base";
import { SsoDomainService } from "./ssoDomain.service";
import { SsoDomainController } from "./ssoDomain.controller";
import { SsoDomainGrpcController } from "./ssoDomain.grpc.controller";
import { SsoDomainResolver } from "./ssoDomain.resolver";

@Module({
  imports: [SsoDomainModuleBase],
  controllers: [SsoDomainController, SsoDomainGrpcController],
  providers: [SsoDomainService, SsoDomainResolver],
  exports: [SsoDomainService],
})
export class SsoDomainModule {}
