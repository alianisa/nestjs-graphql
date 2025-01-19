import { Module } from "@nestjs/common";
import { UserFavoriteMasterModuleBase } from "./base/userFavoriteMaster.module.base";
import { UserFavoriteMasterService } from "./userFavoriteMaster.service";
import { UserFavoriteMasterController } from "./userFavoriteMaster.controller";
import { UserFavoriteMasterGrpcController } from "./userFavoriteMaster.grpc.controller";
import { UserFavoriteMasterResolver } from "./userFavoriteMaster.resolver";

@Module({
  imports: [UserFavoriteMasterModuleBase],
  controllers: [UserFavoriteMasterController, UserFavoriteMasterGrpcController],
  providers: [UserFavoriteMasterService, UserFavoriteMasterResolver],
  exports: [UserFavoriteMasterService],
})
export class UserFavoriteMasterModule {}
