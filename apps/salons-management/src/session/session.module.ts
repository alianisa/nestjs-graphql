import { Module } from "@nestjs/common";
import { SessionModuleBase } from "./base/session.module.base";
import { SessionService } from "./session.service";
import { SessionController } from "./session.controller";
import { SessionGrpcController } from "./session.grpc.controller";
import { SessionResolver } from "./session.resolver";

@Module({
  imports: [SessionModuleBase],
  controllers: [SessionController, SessionGrpcController],
  providers: [SessionService, SessionResolver],
  exports: [SessionService],
})
export class SessionModule {}
