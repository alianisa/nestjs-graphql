import { Module } from "@nestjs/common";
import { UserFavoriteSalonModuleBase } from "./base/userFavoriteSalon.module.base";
import { UserFavoriteSalonService } from "./userFavoriteSalon.service";
import { UserFavoriteSalonController } from "./userFavoriteSalon.controller";
import { UserFavoriteSalonGrpcController } from "./userFavoriteSalon.grpc.controller";
import { UserFavoriteSalonResolver } from "./userFavoriteSalon.resolver";

@Module({
  imports: [UserFavoriteSalonModuleBase],
  controllers: [UserFavoriteSalonController, UserFavoriteSalonGrpcController],
  providers: [UserFavoriteSalonService, UserFavoriteSalonResolver],
  exports: [UserFavoriteSalonService],
})
export class UserFavoriteSalonModule {}
