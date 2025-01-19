import { Module } from "@nestjs/common";
import { UserGenderModuleBase } from "./base/userGender.module.base";
import { UserGenderService } from "./userGender.service";
import { UserGenderController } from "./userGender.controller";
import { UserGenderGrpcController } from "./userGender.grpc.controller";
import { UserGenderResolver } from "./userGender.resolver";

@Module({
  imports: [UserGenderModuleBase],
  controllers: [UserGenderController, UserGenderGrpcController],
  providers: [UserGenderService, UserGenderResolver],
  exports: [UserGenderService],
})
export class UserGenderModule {}
